import {Injectable} from '@angular/core';
import clippy, {Agent} from "clippyts";

@Injectable({
  providedIn: 'root'
})
export class ClippyService {

  private _agent: Agent | undefined;

  constructor() {
    clippy.load({
      name: 'Clippy',
      failCb: (err) => console.log(err),
      successCb: (agent) => {
        // agent.show(false);
        this._agent = agent;
      }
    });
  }

  speak(text: string) {
    this._agent?.speak(text, false);
  }

  play(animation: string) {
    this._agent?.play(animation);
  }

  show() {
    this._agent?.reposition();
    this._agent?.show(true);
  }
}
