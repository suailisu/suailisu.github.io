import os
import re

# 配置你的 _screen 根目录
TARGET_DIR = './_screen'

def fix_yaml_date(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # 使用正则匹配 date: 'YYYY-MM-DD' 或 date: "YYYY-MM-DD"
        # 并替换为 date: YYYY-MM-DD
        fixed_content = re.sub(
            r'^date:\s*[\'"](\d{4}-\d{2}-\d{2})[\'"]', 
            r'date: \1', 
            content, 
            flags=re.MULTILINE
        )

        if content != fixed_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    print("🚀 开始修复日期格式...")
    count = 0
    # 递归遍历 _screen 下的所有文件夹
    for root, dirs, files in os.walk(TARGET_DIR):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                if fix_yaml_date(file_path):
                    count += 1
                    print(f"已修复: {file_path}")

    print(f"\n✅ 完成！共修复 {count} 个文件的日期格式。")

if __name__ == "__main__":
    main()