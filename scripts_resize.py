"""One-off: process real Leo Club of GWUIM-FISSMS photos into public/images/.
Not part of the app — safe to delete after running."""
import sys
from pathlib import Path
from PIL import Image, ImageOps

sys.stdout.reconfigure(encoding="utf-8")

SRC = Path(r"public\source-assets")
DST = Path(r"public\images")


def process(src_path: Path, dst_rel: str, max_edge: int, quality: int = 87,
            fmt: str = "JPEG", crop_bottom_frac: float = 0.0):
    img = Image.open(src_path)
    img = ImageOps.exif_transpose(img)
    if fmt == "JPEG":
        img = img.convert("RGB")
    w, h = img.size
    if crop_bottom_frac > 0:
        img = img.crop((0, 0, w, round(h * (1 - crop_bottom_frac))))
        w, h = img.size
    scale = max_edge / max(w, h)
    if scale < 1:
        img = img.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
    out = DST / dst_rel
    out.parent.mkdir(parents=True, exist_ok=True)
    if fmt == "JPEG":
        img.save(out, "JPEG", quality=quality, optimize=True, progressive=True)
    else:
        img.save(out, "PNG", optimize=True)
    print(f"{dst_rel}: {img.size[0]}x{img.size[1]}")


process(SRC / "logo.png", "logo/logo.png", max_edge=600, fmt="PNG")
process(SRC / "banner" / "img4.jpg", "hero/hero.jpg", max_edge=2400, quality=85)
process(SRC / "banner" / "img1.jpg", "about/aurora-25.jpg", max_edge=2000, quality=85, crop_bottom_frac=0.085)
process(SRC / "banner" / "img3.jpg", "projects/d2-con-26/hero.jpg", max_edge=2200, quality=85)
process(SRC / "banner" / "img5.jpg", "projects/d2-con-26/g1.jpg", max_edge=1800, quality=82)
process(SRC / "banner" / "img2.jpg", "gallery/aurora-group.jpg", max_edge=1800, quality=82)
