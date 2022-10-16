import { GetVideos, GetVideo } from './Requests'
const VideosController = (function () {
    return (module = {
        getJobSeeker: async () => {
            return await GetVideos(
                "https://edge.api.brightcove.com/playback/v1/accounts/5076297042001/playlists/ref:hackathon"
            );
        },
        getVideo: async (path) => {
            return await GetVideo(path);
        }
    });
})();

export default VideosController;
