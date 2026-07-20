#!/bin/sh
# Download all original assets from lifeunlimited.com.au into public/
set -e
BASE="https://lifeunlimited.com.au/wp-content/uploads"
OUT="$(dirname "$0")/../public/images"
mkdir -p "$OUT" "$OUT/../docs"

dl() { # dl <url-path> <outfile>
  if [ ! -f "$OUT/$2" ]; then
    curl -sfL "$BASE/$1" -o "$OUT/$2" && echo "ok  $2" || echo "FAIL $1"
  fi
}

# Branding
dl "2022/10/headerLogo.jpeg" "headerLogo.jpeg"
dl "2022/11/cropped-lu_favicon-192x192.png" "favicon-192.png"
dl "2022/11/cropped-lu_favicon-32x32.png" "favicon-32.png"

# Home
dl "2022/10/Home-banner-scaled.jpg" "home-banner.jpg"
dl "2024/04/podcasts.png" "podcasts.png"
dl "2024/04/instagram.png" "instagram.png"
dl "2024/04/bootcamp.png" "bootcamp.png"
dl "2024/04/mediherb.png" "mediherb.png"
dl "2024/04/integria.png" "integria.png"
dl "2022/10/lina-trochez-ktPKyUs3Qjs-unsplash.jpg" "optimal-health.jpg"
dl "2022/11/LU-About-2-scaled.jpg" "lu-about.jpg"

# People
dl "2020/08/Jack3_.jpeg" "people/jack.jpeg"
dl "2022/10/Sue-Read-847x1024.jpeg" "people/sue-read.jpeg"
dl "2019/08/Julia2.jpg" "people/julia-oboyle.jpg"
dl "2020/08/Erin-Pittard-Large.jpeg" "people/erin-pittard.jpeg"
dl "2022/07/Aileen-Howe.jpg" "people/aileen-howe.jpg"
dl "2021/08/elizabeth-714x1024.jpg" "people/elizabeth-williams.jpg"
dl "2023/05/Lauren.jpeg" "people/lauren-palmer.jpeg"
dl "2025/01/Orlie-Beer-img-619x1024.jpg" "people/orlie-beer.jpg"

# Training courses
dl "2023/04/bootcamp-featured.jpg" "training/bootcamp-featured.jpg"
dl "2022/11/bootcamp-team.jpg" "training/bootcamp-team.jpg"
dl "2023/01/schedule-1.jpg" "training/schedule.jpg"
dl "2023/04/Vicarious-trauma.jpg" "training/vicarious-trauma.jpg"
dl "2022/11/contact-banner.jpg" "training/accidental-counsellor.jpg"
dl "2023/04/Assertiveness-at-work.jpg" "training/assertiveness-at-work.jpg"
dl "2023/04/Respect-and-diversity-at-work.jpg" "training/respect-and-diversity.jpg"
dl "2023/04/Debriefing-and-critical-incident.jpg" "training/debriefing.jpg"

# Organisational solutions
dl "2014/05/sue_new.jpg" "org/sue-presenting.jpg"
dl "2022/12/bullying.jpg" "org/bullying.jpg"
dl "2022/12/group-talking.jpg" "org/group-talking.jpg"

# Retreat
dl "2026/04/Sue-image.png" "retreat/sue.png"
dl "2026/06/c867d819-3194-4eca-afab-360caa489110-1-772x1024.png" "retreat/kj-shaw.png"
dl "2026/04/Liz-image-1013x1024.png" "retreat/liz-fulop.png"

# Resource banners
dl "2022/10/kt_24_image_01-min.jpg" "resource/counselling.jpg"
dl "2022/11/anxiety-banner.jpg" "resource/anxiety-banner.jpg"
dl "2022/11/depression-banner.jpg" "resource/depression-banner.jpg"
dl "2022/11/stress-banner.jpg" "resource/stress-banner.jpg"
dl "2022/11/trauma-banner.jpg" "resource/trauma-banner.jpg"
dl "2022/11/gratitude-banner.jpeg" "resource/gratitude-banner.jpeg"
dl "2022/11/health-and-nutrition-banner.jpeg" "resource/health-nutrition-banner.jpeg"
dl "2022/11/woman-eating-healthy-foods.jpg" "resource/woman-eating-healthy.jpg"
dl "2012/05/eat_mindfully.jpg" "resource/eat-mindfully.jpg"
dl "2023/05/sleep-img.jpg" "resource/sleep.jpg"

# Documents
if [ ! -f "$OUT/../docs/LU-Top-Sleep-Tips.pdf" ]; then
  curl -sfL "$BASE/2022/09/LU-Top-Sleep-Tips.pdf" -o "$OUT/../docs/LU-Top-Sleep-Tips.pdf" && echo "ok  LU-Top-Sleep-Tips.pdf" || echo "FAIL pdf"
fi
echo done
