// ==UserScript==
// @name           Gitlab Project Favicon
// @author         shurik-io
// @version        1.0
// @description    Use og:image as favicon from GitLab
// @unwrap
// @noframes
// @run-at         document-end
// @downloadURL      https://github.com/shurik-io/gitlab-project-favicon/raw/main/gitlab-project-favicon.js
// @updateURL      https://github.com/shurik-io/gitlab-project-favicon/raw/main/gitlab-project-favicon.js
// @match          https://git.adfinis.com/*
// @require        https://code.jquery.com/jquery-3.6.3.slim.min.js
// ==/UserScript==

(function() {
    'use strict';

    var project_img = $('meta[property="og:image"]').attr('content'); if(project_img) $('#favicon').attr('href', project_img);

})();