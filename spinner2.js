process.stdout.write("hello from spinner1.js... \rheyyy\n");

const spinner = (char, delay) => {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
};

spinner("|", 100);
spinner("/", 300);
spinner("-", 500);
spinner("\\", 700);
