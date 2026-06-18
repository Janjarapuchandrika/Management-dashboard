import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const ExportExcel = ({ records }) => {

  const exportExcel = () => {
    const worksheet =
      XLSX.utils.json_to_sheet(records);

    const workbook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Records"
    );

    const excelBuffer =
      XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

    const fileData =
      new Blob([excelBuffer]);

    saveAs(
      fileData,
      "Records_Report.xlsx"
    );
  };

  return (
    <button
      className="btn btn-success"
      onClick={exportExcel}
    >
      Export Excel
    </button>
  );
};

export default ExportExcel;