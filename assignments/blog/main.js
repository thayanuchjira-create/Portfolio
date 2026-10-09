let postCount = 0;
window.addEventListener('DOMContentLoaded', setupFunction);
function setupFunction() {
  document.getElementById('top').textContent = 'My Blog';
  document.getElementById('postButton').addEventListener('click', postFunction);
  document.getElementById('clearButton').addEventListener('click', clearFunction);
}
function postFunction() {
  const input = document.getElementById('message');
  const message = input.value.trim();
  if (!message) { input.focus(); return; }
  const slots = ['topic', 'reply1', 'reply2'];
  if (postCount >= slots.length) { alert('โพสต์ครบ 3 ข้อความแล้ว กด Clear เพื่อเริ่มใหม่'); return; }
  document.getElementById(slots[postCount]).textContent = message;
  postCount += 1;
  input.value = '';
  input.focus();
}
function clearFunction() {
  ['topic', 'reply1', 'reply2', 'message'].forEach(id => {
    const element = document.getElementById(id);
    if (id === 'message') element.value = ''; else element.textContent = '';
  });
  postCount = 0;
}
