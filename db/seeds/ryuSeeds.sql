-- Stand Attacks
insert into ryu (move, startup, active, recovery, onHit, onBlock, damage, stun, moveType, attackType, cancels, notes, gif)
values ("Stand Light Punch", 3, 2, 7, 4, 2, 30, 70, "normal", "H", "su sp chain vt1 vt2", null, "https://media.giphy.com/media/2UGbsKQwDIagufpTXS/giphy.gif"),
("Stand Medium Punch", 5, 3, 10, 7, 1, 60, 100, "normal","H", "su sp vt1 vt2", null, "https://media.giphy.com/media/QNiYP1yB5HjGDwasmY/giphy.gif"),
("Stand Heavy Punch", 8, 3, 20, 3, -1, 90, 150, "normal", "H", "su sp(vt1/vt2) vt1 vt2", "Crush Counters (Ground: Airborne Spin, Airborne: Airborne Spin)", "https://media.giphy.com/media/443Dse7cvCxYqgimNb/giphy.gif"),
("Stand Light Kick", 4, 3, 11, -1, -2, 30, 70, "normal", "H", "su sp vt1 vt2", null, "https://media.giphy.com/media/tsSjpo3RGxBFNDFVDB/giphy.gif"),
("Stand Medium Kick", 8, 3, 16, 2, -2, 60, 100, "normal", "H", "vt1 vt2", null, "https://media.giphy.com/media/ljtq4yk91KlClw8xv8/giphy.gif"),
("Stand Heavy Kick", 10, 2, 20, 4, -1, 90, 150, "normal", "H", "vt1 vt2", "Crush Counters (Ground: Grounded Spin, Airborne: Airborne Spin). Crouchable", "https://media.giphy.com/media/vRMmq49NU24LAIkaRE/giphy.gif");

 -- Crouch Attacks
insert into ryu (move, startup, active, recovery, onHit, onBlock, damage, stun, moveType, attackType, cancels, notes, gif)
values ("Crouch Light Punch", 4, 3, 5, 3, 2, 30, 70, "normal", "H", "su sp chain vt1 vt2", null, "https://media.giphy.com/media/AEscYroZub8WZr1sQK/giphy.gif"),
("Crouch Medium Punch", 6, 3, 12, 4, 2, 60, 100, "normal", "H", "su sp vt1 vt2", null, "https://media.giphy.com/media/E1T7ZLY6JwPnj7uzPR/giphy.gif"),
("Crouch Heavy Punch", 6, 4, 24, -7, -10, 90, 150, "normal", "H", "su sp vt1 vt2", "Forces Stand on Hit", "https://media.giphy.com/media/mWHhRG5CEGAcnmIznr/giphy.gif"),
("Crouch Light Kick", 4, 2, 7, 2, 1, 20, 70, "normal", "L", "su sp chain vt1 vt2", null, "https://media.giphy.com/media/3BMlciJYNIUOjHGOg8/giphy.gif"),
("Crouch Medium Kick", 7, 3, 13, 1, -3, 50, 100, "normal", "L", "su sp vt1 vt2",null, "https://media.giphy.com/media/1n4iwrSzFls6kJA4Mk/giphy.gif"),
("Crouch Heavy Kick", 8, 2, 22, "KD", -11, 90, 150, "normal", "L", "vt1 vt2", null, "https://media.giphy.com/media/83cU4P9IRCSd51fYq6/giphy.gif");

-- Jump Attacks
insert into ryu (move, startup, active, recovery, onHit, onBlock, damage, stun, moveType, attackType, cancels, notes, gif)
values ("Jump Light Punch", 3, 6, null, null, null, 40, 70, "aerial normal", "M", null, null, "https://media.giphy.com/media/MSi3kGiXDy8L4oDWXR/giphy.gif"),
("Jump Medium Punch", 7, 8, null, null, null, "30 + 30", "50 + 50", "aerial normal", "M + M", "Air Tatsumaki Only.", "Has Juggle Properties.", "https://media.giphy.com/media/557InipJTdWF6F4FTg/giphy.gif"),
("Jump Heavy Punch", 7, 7, null, null, null, 90, 150, "aerial normal", "M", null, null, "https://media.giphy.com/media/Asml6BhCaLLMQMo5lm/giphy.gif"),
("Jump Light Kick", 4, 6, null, null, null, 40, 70, "aerial normal", "M", null, null, "https://media.giphy.com/media/MuAtpokT6z2kTktlBK/giphy.gif"),
("Jump Medium Kick", 6, 4, null, null, null, 60, 100, "aerial normal", "M", null, null, "https://media.giphy.com/media/1jXGqXnX34H2JPwLJg/giphy.gif"),
("Jump Heavy Kick", 9, 5, null, null, null, 90, 150, "aerial normal", "M", null, null, "https://media.giphy.com/media/5oKrH7IUd7agdPai72/giphy.gif");

-- Unique Moves
insert into ryu (move, startup, active, recovery, onHit, onBlock, damage, stun, moveType, attackType, cancels, notes, gif)
values("Collarbone Breaker (F + MP)", 22, "1 & 3", 17, 1, -6, "30 + 30", "60 + 40", "unique", "M + M", null, null, "https://media.giphy.com/media/1dKSgzkiCrVfEADI4J/giphy.gif"),
("Solar Plexus Strike (F + HP)", 17, "2 (1) & 2", 18, 8, -2, "40 + 40", "75 + 75",  "unique", "H + H", "su", null, "https://media.giphy.com/media/2WdMXgtyaALQACqcAG/giphy.gif"),
("Axe Kick (B + HK)", 9, "3 (3) & 4", 16, 4, -2, "40 + 40", "60 + 90", "unique", "H + H", "vt1 vt2", "1st Hit Forces Stand on Hit", "https://media.giphy.com/media/ZwDqZ68N4A10qmq7wT/giphy.gif"),
("Jodan Sanrengeki 1st (s.MP -> s.HP)", "5 + 9", 2, 28, -9, -16, "60 + 63", "100 + 90", "unique", "H + H", "vt1 vt2", null, "https://media.giphy.com/media/8cBcmCbno19GbfCjMx/giphy.gif"),
("Jodan Sanrengeki 2nd (s.MP -> s.HP -> s.HK)", "5 + 9 + 9", 2, 26, "KD", -7, "60 + 63 + 56", "100 + 90 + 80",  "unique", "H + H + H", "vt1 vt2","Third Hit Crouchable on Block", "https://media.giphy.com/media/2mFEt1wgnUIimRYZso/giphy.gif"),
("Jodan Nirengeki (s.HP -> s.HK)", "8 + 9", 2, 26, "KD", -7, "90 + 63", "150 + 90",  "unique", "H + H", "vt1 vt2", "Second Hit Crouchable on Block", null);

-- Throw
insert into ryu (move, startup, active, recovery, onHit, onBlock, damage, stun, moveType, attackType, cancels, notes, gif)
values ("Shoulder Throw (F + Throw)", 5, 3, 17, "KD", "KD", 130, 150, "throw", "T", null, null, "https://media.giphy.com/media/jbEwXCU6nivtWhIU4E/giphy.gif");

insert into ryu (move, startup, active, recovery, onHit, onBlock, damage, stun, moveType, attackType, cancels, notes, gif)
values ("Somersault Throw (B + Throw)", 5, 3, 17, "KD", "KD", 150, 200, "throw", "T", null, null, "https://media.giphy.com/media/ZxemTAebx6MTHP91PU/giphy.gif");

-- V Skill
insert into ryu (move, startup, active, recovery, onHit, onBlock, damage, stun, moveType, attackType, cancels, notes, gif)
values ("Mind's Eye (V Skill)", "3 (1)", 7, 32, null, null, null, null, null, null, "vskill", "It's a parry. Cannot parry throws.", "https://media.giphy.com/media/vbQguWLe4wsJwjLlC9/giphy.gif");

-- V Reversal
insert into ryu (move, startup, active, recovery, onHit, onBlock, damage, stun, moveType, attackType, cancels, notes, gif)
values ("Hashogeki (V Reversal)", "17","2", "24", "KD", "-2", "(60)", "0", "unique", "H", null, "Hit Invincible. Throwable.", null);


-- Special Moves
insert into ryu (move, startup, active, recovery, onHit, onBlock, damage, stun, moveType, attackType, cancels, notes, gif)
values ("Light Shoryuken", "3","12", "19 + 11", "KD", "-24", "100(60)", "150(100)", "special", "H", "su", "Throw Invincible frames 1-3. Airborne frames 3-33.", null),
("Medium Shoryuken", "4","11", "26 + 13", "KD", "-32", "120(60)", "150(100)", "special", "H", "su", "Airborne Invincible frames 1-6. Airborne frames 6-40.", null),
("Heavy Shoryuken", "5","10", "29 + 15", "KD", "-36", "130(60)", "150(100)",  "special", "H", "su", "Strike and Projectile Invincible frames 3-6. Airborne frames 7-43.", null),
("EX Shoryuken", "3","12", "29 + 15", "KD", "-37", "80 + 80", "200", "EX-special", "H + H", null, "Full invincibility frames 1-15. Airborne frames 5-43.", null),
("Light Hadouken", "14", null, "33", "-1", "-6", "60", "100", "special", "H", "su", "Projectile.", null),
("Medium Hadouken", "14", null, "33", "-1", "-6", "60", "100", "special", "H", "su","Projectile.", null),
("Heavy Hadouken", "14", null, "33", "-1", "-6", "60", "100", "special", "H", "su","Projectile.", null),
("EX Hadouken", "11", null, "31", "KD", "2", "40 + 60", "0 + 150", "EX-special", "H + H", "vt1 vt2","Projectile.", null),
("Light Tatsumaki Senpukyaku", "10", "2", "18 + 12", "KD", "-10", "90", "150", "special", "H", null, "Airborne frames 6-29 (Crouchable).", "https://media.giphy.com/media/9OZUYo2Clfj4m1INrn/giphy.gif"),
("Medium Tatsumaki Senpukyaku", "12", "2 (16) 2 ", "14 + 16", "KD", "-10", "100", "150", "special", "H", null, "Airborne frames 7-47 (Crouchable). Lower-body Projectile Invincible frames 6-45.", "https://media.giphy.com/media/lo5qJlHQHyOIu3m9L2/giphy.gif"),
("Hard Tatsumaki Senpukyaku", "14", "2 (16) 2 (14) 2", "14 + 17", "KD", "-10", "110", "150", "special", "H", null, "Airborne frames 7-63 (Crouchable). Lower-body Projectile Invincible frames 9-61.", "https://media.giphy.com/media/xUVh8ReGWoZWaUlz2I/giphy.gif"),
("EX Tatsumaki Senpukyaku", "10", "2 (4) 2 (5) 2 (3) 3 (3) 2", "11+15", "KD", "-19", "28 * 5", "150", "EX-special", "H", null, "Airborne frames 5-46 (Crouchable). Lower-body Projectile Invincible frames 7-36.", "https://media.giphy.com/media/8cNhZdjPAeidRSVYz0/giphy.gif"),
("Light Joudan Sokutou Geri", "16", null, "31", "KD", "2", "40 + 60", "0 + 150", "special", "H + H", "vt1 vt2", null, null),
("Medium Joudan Sokutou Geri", "18", null, "31", "KD", "2", "40 + 60", "0 + 150", "special", "H + H", "vt1 vt2", null, null),
("Heavy Joudan Sokutou Geri", "20", null, "31", "KD", "2", "40 + 60", "0 + 150", "special", "H + H", "vt1 vt2", null, null),
("EX Joudan Sokutou Geri", "18", null, "31", "KD", "2", "40 + 60", "0 + 150", "EX-special", "H + H", "vt1 vt2", "Wall Bounces on Hit. Opponent cannot back-recovery on Hit", null);

-- Super
insert into ryu (move, startup, active, recovery, onHit, onBlock, damage, stun, moveType, attackType, cancels, notes, gif)
values ("Shinkuu Hadouken", "4", null, "61", "KD", "-17", "320", "0", "super", "H", null, "Full Invincibility frames 1-3.", null);