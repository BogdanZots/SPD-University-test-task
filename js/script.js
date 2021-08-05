import {setFollowingStatus,getFollowingStatus,setCurrentFollowersNumber,getCurrentFollowersNumber} from "./localStorage.js";
import { makeConcat,changeButtonState} from "./helpers.js";
import{followBtn,currentFollowers,startFollowersValue} from './consts.js'


const followingState = {
    followersNumber : getCurrentFollowersNumber() || startFollowersValue,
    followingState : getFollowingStatus() || 'false',
    checkFollowingState() {
        if (followingState.followingState == 'true') {
            changeButtonState(followingState.followingState,followBtn)
        } else if (followingState.followingState == 'false') {
            changeButtonState(followingState.followingState,followBtn)
        }
    }
}

followingState.checkFollowingState()


currentFollowers.innerHTML = makeConcat()

function followingUp() {
    followingState.followersNumber = followingState.followersNumber + 1;
    currentFollowers.innerHTML = makeConcat()
    setFollowingStatus('true')
    setCurrentFollowersNumber(followingState.followersNumber)
    followingState.followingState = getFollowingStatus()
    changeButtonState(followingState.followingState,followBtn)
}


function followingDown() {
    followingState.followersNumber = followingState.followersNumber - 1;
    currentFollowers.innerHTML = makeConcat()
    setFollowingStatus('false')
    setCurrentFollowersNumber(followingState.followersNumber)
    followingState.followingState = getFollowingStatus()
    changeButtonState(followingState.followingState,followBtn)
}

followBtn.addEventListener('click', function () {
    if  (followingState.followingState == 'true') {
        followingDown()
        return
    } else if (followingState.followingState == 'false') {
        followingUp()
    }
})

export {followingState}