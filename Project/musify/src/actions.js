import { SET_PLAY_NOW } from "./constants";

export const setPlayNow = (audio_url, img_url) => {
    return {
        type: SET_PLAY_NOW,
        payload: { audio_url, img_url }
    }
}