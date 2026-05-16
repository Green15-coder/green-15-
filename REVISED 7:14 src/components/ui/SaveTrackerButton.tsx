const handleSave = async () => {
  setLoading(true);
  await fetch("/api/tracker", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ playId, units: 1 }),
  });
  setSaved(true);
  setLoading(false);
  setTimeout(() => setSaved(false), 2000);
};
