
export default function eventProps(props) {
    const { user, effect } = props;
    const addPtag = () => {
        
        console.log("clicked hey")
    }
    return (
      <>
          <button onClick={user}>Click me</button>
          <button onClick={effect}>Hover</button>
          <button onClick={addPtag} id="h">hey</button>
      </>
  )
}
