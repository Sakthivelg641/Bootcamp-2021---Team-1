import React from "react";
import NotesMenu from "../views/NotesMenu";
import NotesList from "../views/NotesList";
import NoteView from "../views/NoteView";

const MainContainer = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <NotesMenu />
        <NotesList />
        <NoteView />
      </div>
    </div>
  );
};

export default MainContainer;
