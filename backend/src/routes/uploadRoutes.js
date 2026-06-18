const express = require("express");
const multer = require("multer");
const { extractTextFromPDF } = require("../services/pdfService");
const { processDocument } = require("../services/document.service");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
});

router.post("/", upload.single("file"), async (req, res) => {
  console.log("1.hello came here", req.file);
  console.log("req.body =", req.body);

  try {
    const fileText = await extractTextFromPDF(req.file.path);
    const result = await processDocument(fileText);
    res.json({
      success: true,
      file: req.file,
      extractedText: fileText,
      chunkStored: result.chunksProcessed,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "pdf extaction failed",
    });
  }
});

module.exports = router;
