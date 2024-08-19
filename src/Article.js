export default function Article({name, children}) {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        boxShadow: "0px 10px 10px gray",
        margin: "10px",
        width: "50%",
      }}
    >
      <div style={{ padding: "10px" }}>
        <h1>{name}</h1>
        <h2>youssefmuhamed634@gmail.com</h2>
        {children}
      </div>
    </div>
  );
}

  