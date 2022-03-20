const link = [
    {
        src: 'https://www.youtube.com/embed/e-t40GF91To'
    },
    {
        src: 'https://www.youtube.com/embed/mMwsjQ0PfJM'
    },
    {
        src: 'https://www.youtube.com/embed/6RQ-bBdASvk'
    },
    {
        src: 'https://www.youtube.com/embed/Rldk4zmwlqo'
    },
    {
        src: 'https://www.youtube.com/embed/0vvCe4EHtus'
    },
    {
        src: 'https://www.youtube.com/embed/5GrKuaXBg4k'
    },
    {
        src: 'https://www.youtube.com/embed/WvkTcNQsxzc'
    }
    ];

const videos = document.querySelector("iframe");
console.log(videos);
const todaysVideos = link[Math.floor(Math.random() * link.length)];
console.log(todaysVideos.src);
videos.src = todaysVideos.src;