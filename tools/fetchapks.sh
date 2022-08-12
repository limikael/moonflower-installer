#!/usr/bin/env bash
fakeroot apk \
	--allow-untrusted \
	--root tools/apkroot \
	--initdb \
	--repository https://dl-cdn.alpinelinux.org/alpine/latest-stable/main/ \
	add xkeyboard-config kbd-bkeymaps tzdata