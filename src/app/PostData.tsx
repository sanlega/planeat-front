const handleSubmit = async (e) => {
    e.preventDefault();

    let data = await e.target.prompt.value;
    const res = await fetch("http://10.19.200.106:8080/api/search", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    console.log(res.json());
    return (res.json())
};

const PostData = () => {
  return (
    <form
      onSubmit={handleSubmit}
      id="prompt"
      className="w-full flex flex-row justify-end"
    >
      <textarea name="prompt"
        placeholder="Make me a vegetarian meal with products of carrefour."
        className="max-h-96 min-h-12 h-10 w-2/5 rounded-xl flex flex-row justify-start bg-slate-100 p-3 text-gray-500"
      ></textarea>
      <button>Send</button>
    </form>
  );
};

export { PostData };
