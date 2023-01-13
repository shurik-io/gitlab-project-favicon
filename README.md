# Gitlab project logo as favicon

Uses the project logo from a GitLab repo as the favicon in your browser. GitLab itself doesn't support this yet, even there is [an issue](https://gitlab.com/gitlab-org/gitlab/-/issues/15764) for it since years.

## Features

* Replaces the favicon on your browser by the GitLab repo logo
* Runs only on given addresses, see `@match`
* Updates automatically with the `@updateURL` feature

## Requires

* [Tampermonkey](https://www.tampermonkey.net/) [Firefox Browser Extension](https://addons.mozilla.org/de/firefox/addon/tampermonkey/)


## Deploy

* Open Tampermonkey in your browser
* Copy paste the user script
* It will detect all the required settings from the first block

## Configure

* To only change the favicons on your favorite GitLab site, replace the `@match` URL with your GitLab instance

## Credits

This is based on [Stanislav Popov](https://gist.github.com/popstas/9d17c1b0e1772a84581b3af8a342ad73)

## License

[GPL-3.0](LICENSE)