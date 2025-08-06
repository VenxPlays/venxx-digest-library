body { font-family: 'Montserrat', 'Orbitron', ui-sans-serif, system-ui, sans-serif; }
.glass {
  background: rgba(31,41,55,0.62);
  box-shadow: 0 8px 32px 0 rgba(31,41,55,0.37);
  backdrop-filter: blur(14px);
  border-radius: 1.5rem;
  border: 1px solid rgba(89,255,255,0.11);
}
.neon {
  text-shadow: 0 0 8px #00fff7, 0 0 2px #00fff7;
}
.fade-in { animation: fade-in .7s cubic-bezier(.4,0,.2,1);}
.pop-in { animation: pop-in .3s cubic-bezier(.4,1.7,.7,.9);}
@keyframes fade-in { from { opacity:0; transform:translateY(30px);} to{opacity:1;transform:none;}}
@keyframes pop-in { 0% {transform:scale(0.8);} 70% {transform:scale(1.1);} 100% {transform:scale(1);}}
.modal-bg { background: rgba(17,24,39,0.93);}
.float-label { position:relative;}
.float-label input, .float-label select {
  background:transparent;
  border: none;
  border-bottom: 2px solid #2dd4bf;
  color: #fff;
  outline: none;
  width: 100%;
  padding: 0.75rem 0 0.5rem 0.1rem;
  font-size: 1rem;
  transition: border-bottom-color .2s;
}
.float-label label {
  position:absolute; top:1rem; left:0.2rem;
  color:#7dd3fc; pointer-events:none; font-size:1rem;
  transition: .2s;
}
.float-label input:focus + label,
.float-label input:not(:placeholder-shown) + label,
.float-label select:focus + label,
.float-label select:not([value=""]) + label {
  top:-0.45rem; font-size:0.82rem; color:#0fffc3;
  font-weight: 600;
  letter-spacing: 0.02em;
}
::-webkit-scrollbar { width: 9px; }
::-webkit-scrollbar-thumb { background: #164e63; border-radius: 99px;}
/* Animation for correct/wrong */
.option-label {
  transition: background 0.2s, color 0.2s, box-shadow 0.2s, border-color 0.2s, transform .18s;
}
.option-label.correct {
  background: #16f47b !important;
  color: #111 !important;
  border-color: #16f47b !important;
  box-shadow: 0 0 18px #16f47bcc, 0 0 2px #16f47b;
  animation: pop-in .3s;
}
.option-label.wrong {
  background: #ff5454 !important;
  color: #fff !important;
  border-color: #ff5454 !important;
  box-shadow: 0 0 18px #ff5454cc, 0 0 2px #ff5454;
  animation: shake .35s;
}
@keyframes shake {
  0% {transform: translateX(0);}
  20% {transform: translateX(-5px);}
  40% {transform: translateX(5px);}
  60% {transform: translateX(-5px);}
  80% {transform: translateX(5px);}
  100% {transform: translateX(0);}
}
.option-label.selected {
  transform: scale(1.05);
}
/* Button pulse for Next */
.pulse {
  animation: pulse 1.1s infinite;
}
@keyframes pulse {
  0% {box-shadow: 0 0 0 0 #00fff733;}
  70% {box-shadow: 0 0 0 10px #00fff71a;}
  100% {box-shadow: 0 0 0 0 #00fff700;}
}
