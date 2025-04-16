import React from "react";
import CreateGroup from "@/pages/create-group";
import UploadReceipt from "@/pages/upload-receipt";
import EditItems from "@/pages/edit-items";
import SelectItems from "@/pages/select-items";
import ShowTotals from "@/pages/show-totals";

export type Item = {
  name: string;
  label: string;
  cost: string;
};

enum Page {
  CREATE_GROUP,
  UPLOAD_RECEIPT,
  EDIT_ITEMS,
  SELECT_ITEMS,
  SHOW_TOTALS,
}

export default function ImagePickerExample() {
  const [people, setPeople] = React.useState<string[]>([]);
  const [items, setItems] = React.useState<Item[]>([]);
  const [selectedPerson, setSelectedPerson] = React.useState<string | null>(
    null
  );
  const [page, setPage] = React.useState<Page>(Page.CREATE_GROUP);

  switch (page) {
    case Page.CREATE_GROUP:
      return (
        <CreateGroup
          people={people}
          setPeople={setPeople}
          onNext={() => setPage(Page.UPLOAD_RECEIPT)}
        />
      );
    case Page.UPLOAD_RECEIPT:
      return (
        <UploadReceipt
          setItems={setItems}
          onNext={() => setPage(Page.EDIT_ITEMS)}
        />
      );
    case Page.EDIT_ITEMS:
      return <EditItems />;
    case Page.SELECT_ITEMS:
      return <SelectItems />;
    case Page.SHOW_TOTALS:
      return <ShowTotals />;
    default:
      return null;
  }
}
