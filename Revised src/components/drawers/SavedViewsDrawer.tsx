const handleSave = async () => {
  if (!name.trim()) return;
  const res = await fetch("/api/saved-views", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, filters: {} }),
  });
  const view = await res.json();
  setList((v) => [...v, view]);
  setName("");
};

const handleDelete = async (id: string) => {
  await fetch(`/api/saved-views/${id}`, { method: "DELETE" });
  setList((v) => v.filter((x) => x.id !== id));
};
