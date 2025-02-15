
import { Upload } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const UploadZone = () => {
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    // Filter for PDF files
    const pdfFiles = files.filter(file => file.type === "application/pdf");
    
    if (pdfFiles.length === 0) {
      toast({
        title: "Invalid file type",
        description: "Please upload PDF files only",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Files uploaded",
      description: `Successfully uploaded ${pdfFiles.length} file(s)`,
      variant: "default",
    });
    // TODO: Handle file processing
  };

  return (
    <div
      className={`glass-card rounded-lg p-8 text-center transition-all duration-200 ${
        isDragging ? "border-highlight border-2" : ""
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center gap-4">
        <Upload className="h-12 w-12 text-highlight animate-pulse" />
        <h3 className="text-xl font-semibold">Upload Medical Reports</h3>
        <p className="text-muted-foreground">
          Drag and drop your files here or click to browse
        </p>
        <input
          type="file"
          multiple
          accept=".pdf"
          onChange={handleFileInput}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="px-4 py-2 bg-highlight hover:bg-highlight-hover text-white rounded-md cursor-pointer transition-colors"
        >
          Browse Files
        </label>
      </div>
    </div>
  );
};
