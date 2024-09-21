export default function propsInJSX(props) {
  
  return (
    <>
      <li key={props.element.id}>
        <div>
          <h1>{props.element.src}</h1>
          <img src={props.element.img_url} alt="picture " />
          <p>{props.element.description}</p>
          <a href={props.element.watch_url}>Watch now</a>
        </div>
      </li>
    </>
  );
}
