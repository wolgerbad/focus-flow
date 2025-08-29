function Notes() {
  return (
    <div className="bg-white border-gray-200 border-1 rounded-md p-4 min-h-32">
      <h2>Notes</h2>
      <textarea
        rows="5"
        cols="40"
        className="bg-gray-100 p-2 w-full my-2 outline-0 resize-none"
        placeholder="brainstorm-the-project-with-team"
      />
    </div>
  );
}

export default Notes;
