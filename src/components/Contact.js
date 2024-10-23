const Contact = ()=> <>
    <div>
        <h1 className="font-bold text-3xl">Contact Us Page</h1>
        <form onSubmit={e=>e.preventDefault()}>
            <input type="text" placeholder="Name" className="border p-2 m-2"/>
            <input type="text" placeholder="Message" className="border p-2 m-2"/>
            <button className="border bg-black text-zinc-100">Submit</button>
        </form>
    </div>
</>
export default Contact;