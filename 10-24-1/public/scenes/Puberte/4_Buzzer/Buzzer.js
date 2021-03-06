import Component from "../../../js/Component.js";

export default class Buzzer extends Component {
  constructor({ goToDiscussion }) {
    super();
    this.html = "";
    this.goToDiscussion = goToDiscussion;
  }

  async load() {
    this.html = await this.loadHTML(
      "scenes/Puberte/4_Buzzer/Buzzer.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("explic-buzzer-4")
      .addEventListener("click", e => this.goToDiscussion(e));
    // Pause sur la musique d'ambiance
    document.getElementById("puberte-global-player").pause();
    console.log(document.getElementById("buzzer-player"));
    document.getElementById("buzzer-player").onended = () =>
      document.getElementById("puberte-global-player").play();
  }

  render(target) {
    document.getElementById("buzzer-player").elemMusicOn = true;
    document.getElementById("buzzer-player").volume = 0.1;
    if (!document.getElementById("buzzer-player").isMuted) {
      document.getElementById("buzzer-player").play();
    }
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
