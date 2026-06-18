import { uploadPdf } from "@/services/UploadService";
import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function PdfUpload() {
  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    console.log("file =", file);
    await uploadPdf(file);

    alert("Uploaded Successfully");
  };

  return (
    <Button
      component="label"
      variant="contained"
      sx={{ ".MuiButton-startIcon": { marginRight: 0, marginLeft: 0 } }}
      startIcon={<CloudUploadIcon />}
    >
      <VisuallyHiddenInput type="file" onChange={handleUpload} accept=".pdf" />
    </Button>
  );
}
