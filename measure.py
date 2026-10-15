from PIL import Image

for file, name in [
    ("media_1792058335140.png", "Landing Page"),
    ("media_1792058379441.png", "Centres"),
    ("media_1792058390391.png", "Knowledge Centre"),
    ("media_1792058402624.png", "Perspectives"),
    ("media_1792058419404.png", "Online Consultation"),
]:
    img = Image.open(f"C:/Users/Habil Shuraimi/.gemini/antigravity-ide/brain/395d2467-c04f-442f-a80b-33f1d6f6b1d7/.tempmediaStorage/{file}")
    min_y = 9999
    min_x = 9999
    for y in range(140, 500):
        for x in range(50, 600):
            r, g, b = img.getpixel((x, y))[:3]
            if r < 50 and g < 60 and b < 60:
                if y < min_y:
                    min_y = y
                    min_x = x
    print(f"{name:20}: topmost dark pixel at y={min_y}, distance from header bottom (136px) = {min_y - 136}px")
