import "react";

const url = import.meta.env.API_ENDPOINT_URL || "http://Aws-java-day-1-dagandreas-todo-a-env.eba-pmjtm5tm.eu-west-1.elasticbeanstalk.com"
// ensure trailing / is removed
export const API_URL = url.replace(/\/$/, "");
