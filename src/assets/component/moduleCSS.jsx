import moduleStyle from "./css/style.module.css";
export default function moduleCSS() {
  return (
    <>
      <div className={moduleStyle.bg}>moduleCSS</div>
      <p>ParaGraph Tag</p>
      <button className={moduleStyle.btn}>Button</button>
    </>
  );
}