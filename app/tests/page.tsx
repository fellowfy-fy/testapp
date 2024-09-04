import Image from "next/image";

export default function page() {
  return (
    <main>
      <div className="appbar">
        <Image
          src="/arrowLeft.svg"
          alt="Arrow"
          width={19.5}
          height={15.5}
          className="arrow"
        />
        <span className="appbar_title">Learning</span>
      </div>
      <div className="tab">
        <span>Tests</span>
        <div className="tab_line"></div>
      </div>
      <div className="grid-container">
        <div className="grid-item">1</div>
        <div className="grid-item">2</div>
        <div className="grid-item">3</div>
        <div className="grid-item">4</div>
        <div className="grid-item">5</div>
        <div className="grid-item">6</div>
        <div className="grid-item">7</div>
        <div className="grid-item">8</div>
        <div className="grid-item">9</div>
        <div className="grid-item">10</div>
        <div className="grid-item">11</div>
        <div className="grid-item">12</div>
        <div className="grid-item">13</div>
        <div className="grid-item">14</div>
        <div className="grid-item">15</div>
        <div className="grid-item">16</div>
        <div className="grid-item">17</div>
        <div className="grid-item">18</div>
        <div className="grid-item">19</div>
        <div className="grid-item">20</div>
        <div className="grid-item">21</div>
        <div className="grid-item">22</div>
        <div className="grid-item">23</div>
        <div className="grid-item">24</div>
        <div className="grid-item">25</div>
        <div className="grid-item">26</div>
        <div className="grid-item">27</div>
        <div className="grid-item">28</div>
      </div>
    </main>
  );
}
