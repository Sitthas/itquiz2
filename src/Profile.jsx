import { Navigate, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const isLogin = localStorage.getItem("isLogin");

  if (!isLogin) {
    return <Navigate to="/" />;
  }

  const logout = () => {
    localStorage.removeItem("isLogin");
    navigate("/");
  };

  return (
    <div className="profile-page">

      {/* Header */}
      <header>
        <h1>BEN 10</h1>

        <button className="logout" onClick={logout}>
          LOGOUT
        </button>
      </header>


      {/* Profile */}
      <main className="character-card">

        <div className="character-image">
          <img
            src="/ben10.jpg"
            alt="Ben 10"
          />
        </div>

        <div className="character-info">

          <p className="tag">
            CHARACTER PROFILE
          </p>

          <h2>
            Ben Tennyson
          </h2>

          <p>
            <b>ชื่อ:</b> เบ็น เท็นนิสัน
          </p>

          <p>
            <b>ชื่อเล่น:</b> Ben 10
          </p>

          <p>
            <b>อุปกรณ์:</b> Omnitrix
          </p>

          <p>
            <b>ความสามารถ:</b>{" "}
            สามารถแปลงร่างเป็นเอเลี่ยน
            หลากหลายสายพันธุ์
          </p>

          <p>
            <b>บทบาท:</b> ฮีโร่ผู้พิทักษ์โลก
          </p>

          <p>
            <b>ซีรีส์:</b> Ben 10
          </p>

          <div className="aliens">
            <span>HEATBLAST</span>
            <span>FOUR ARMS</span>
            <span>DIAMONDHEAD</span>
            <span>XLR8</span>
          </div>

        </div>

      </main>


      {/* ประวัติ */}
      <section className="history">

        <h3>
          📖 ประวัติ Ben Tennyson
        </h3>

        <p>
          เบ็น เท็นนิสัน (Ben Tennyson)
          เป็นเด็กชายที่พบกับ Omnitrix
          อุปกรณ์จากต่างดาวที่สามารถทำให้
          ผู้สวมใส่แปลงร่างเป็นสิ่งมีชีวิต
          ต่างดาวหลากหลายสายพันธุ์ได้
        </p>

        <p>
          หลังจากได้รับ Omnitrix เบ็นเริ่มใช้
          ความสามารถของมันเพื่อช่วยเหลือผู้คน
          และต่อสู้กับเหล่าวายร้ายและภัยคุกคาม
          จากต่างดาว
        </p>

        <p>
          ระหว่างการผจญภัย เบ็นได้เรียนรู้
          ความรับผิดชอบและการใช้พลังอย่างถูกต้อง
          พร้อมกับการทำงานร่วมกับครอบครัว
          และเพื่อน ๆ
        </p>


        <h3>
          ⭐ ข้อมูลสำคัญ
        </h3>

        <ul>

          <li>
            <b>ชื่อเต็ม:</b> Ben Tennyson
          </li>

          <li>
            <b>ชื่อไทย:</b> เบ็น เท็นนิสัน
          </li>

          <li>
            <b>ฉายา:</b> Ben 10
          </li>

          <li>
            <b>อุปกรณ์:</b> Omnitrix
          </li>

          <li>
            <b>ความสามารถ:</b> แปลงร่างเป็นเอเลี่ยน
          </li>

          <li>
            <b>ภารกิจ:</b> ปกป้องโลกและช่วยเหลือผู้คน
          </li>

        </ul>

      </section>


      <footer>
        BEN 10 CHARACTER DATABASE
      </footer>

    </div>
  );
}

export default Profile;