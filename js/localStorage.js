const setFollowingStatus =  (isFollowing)  => localStorage.setItem('isFollowing', JSON.stringify(`${isFollowing.toString()}`))


const getFollowingStatus = function () {
    let isFollowing = JSON.parse(localStorage.getItem('isFollowing'))
    return isFollowing
}

const setCurrentFollowersNumber = (followersNumber) => localStorage.setItem('followersNumber', JSON.stringify(followersNumber))


const getCurrentFollowersNumber = function () {
    let followersNumber = JSON.parse(localStorage.getItem('followersNumber'))
    return followersNumber
}

export {setFollowingStatus,getFollowingStatus,setCurrentFollowersNumber,getCurrentFollowersNumber}