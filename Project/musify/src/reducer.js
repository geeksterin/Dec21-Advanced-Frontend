import { SET_PLAY_NOW } from "./constants";

const initiaState = {
    audio_url: "",
    img_url: ""
};

const reducer = (currentState = initiaState, action) => {
    const newState = { ...currentState };

    switch(action.type) {
        case SET_PLAY_NOW:
            newState.audio_url = action.payload.audio_url;
            newState.img_url   = action.payload.img_url;
            break;
    }

    return newState;
}

export default reducer;