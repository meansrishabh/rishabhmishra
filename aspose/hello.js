var aspose = aspose || {};
aspose.cells = require("aspose.cells");

var workbook = new aspose.cells.Workbook(aspose.cells.FileFormatType.XLSX);
workbook.getWorksheets().get(0).getCells().get("A1").putValue("testing...");
workbook.save("output.xlsx");