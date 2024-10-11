import "react";

const url = import.meta.env.API_ENDPOINT_URL || 
"http://springtodothomasnielsen-env.eba-9zvqxgkg.eu-north-1.elasticbeanstalk.com/";
// ensure trailing / is removed
export const API_URL = url.replace(/\/$/, "");
