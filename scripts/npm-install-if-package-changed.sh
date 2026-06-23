#!/bin/sh

install_if_package_changed() {
  old_rev="$1"
  new_rev="$2"
  action="$3"

  if [ -z "$old_rev" ] || [ -z "$new_rev" ]; then
    return 0
  fi

  if ! git rev-parse --verify "$old_rev" >/dev/null 2>&1; then
    return 0
  fi

  if ! git rev-parse --verify "$new_rev" >/dev/null 2>&1; then
    return 0
  fi

  changed_files="$(git diff --name-only "$old_rev" "$new_rev" -- package.json package-lock.json)"

  if [ -z "$changed_files" ]; then
    return 0
  fi

  echo "package files changed after git $action; running npm install..."
  npm install
}
