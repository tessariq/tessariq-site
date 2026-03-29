#!/usr/bin/env bash
set -euo pipefail

root_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
source_dir="${root_dir}/../tessariq/assets/logo"

if [[ ! -d "${source_dir}" ]]; then
  echo "Missing brand asset source: ${source_dir}" >&2
  exit 1
fi

mkdir -p "${root_dir}/static/logo"

cp "${source_dir}"/*.svg "${root_dir}/static/logo/"
cp "${source_dir}/favicon.svg" "${root_dir}/static/favicon.svg"
cp "${source_dir}/favicon.svg" "${root_dir}/static/icon.svg"
cp "${source_dir}/favicon.svg" "${root_dir}/assets/favicon.svg"

magick "${source_dir}/favicon.svg" -background none -resize 180x180 "${root_dir}/static/apple-touch-icon.png"
magick "${source_dir}/favicon.svg" -background none -resize 192x192 "${root_dir}/static/favicon-192x192.png"
magick "${source_dir}/favicon.svg" -background none -resize 512x512 "${root_dir}/static/favicon-512x512.png"
magick "${source_dir}/favicon.svg" -background none -define icon:auto-resize=16,32,48 "${root_dir}/static/favicon.ico"

cp "${root_dir}/static/favicon-512x512.png" "${root_dir}/assets/favicon-512x512.png"
