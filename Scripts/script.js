var com;

if (!com) {
    com = {};
} else if (typeof com !== 'object') {
    throw new Error('com already exists and is not an object');
}

if (!com.spt_development) {
    com.spt_development = {};
} else if (typeof com.spt_development !== 'object') {
    throw new Error('com.spt_development already exists and is not an object');
}

$(function () {
});
