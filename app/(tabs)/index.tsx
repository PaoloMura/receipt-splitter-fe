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
  const [selectedPerson, setSelectedPerson] = React.useState(0);
  const [page, setPage] = React.useState<Page>(Page.CREATE_GROUP);

  const handleReset = () => {
    setPeople([]);
    setItems([]);
    setSelectedPerson(0);
    setPage(Page.CREATE_GROUP);
  };

  const handleNextPerson = () => {
    if (selectedPerson === people.length - 1) {
      setPage(Page.SHOW_TOTALS);
      return;
    }

    setSelectedPerson((p) => p + 1);
  };

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
      return (
        <SelectItems
          person={people[selectedPerson]}
          items={items}
          setItems={setItems}
          onNext={handleNextPerson}
        />
      );
    case Page.SHOW_TOTALS:
      return <ShowTotals people={people} items={items} onNext={handleReset} />;
    default:
      return null;
  }
}
