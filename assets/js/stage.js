(function () {
  var SPLASH_KEY = "stage-splash-seen";
  var FRAMES_KEY = "stage-frames";

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function dismissSplash(splash) {
    try {
      sessionStorage.setItem(SPLASH_KEY, "1");
    } catch (e) {}
    document.documentElement.classList.add("splash-seen");
    document.documentElement.classList.remove("splash-open");
    if (!splash) {
      return;
    }
    splash.classList.add("is-exiting");
    var finished = false;
    var done = function () {
      if (finished) {
        return;
      }
      finished = true;
      splash.setAttribute("hidden", "");
      splash.removeEventListener("transitionend", done);
      var main = document.getElementById("main");
      if (main) {
        main.focus();
      }
    };
    splash.addEventListener("transitionend", done);
    window.setTimeout(done, 450);
  }

  ready(function () {
    var splash = document.getElementById("stage-splash");
    if (splash) {
      var seen = false;
      try {
        seen = sessionStorage.getItem(SPLASH_KEY) === "1";
      } catch (e) {
        seen = true;
      }
      if (seen) {
        splash.setAttribute("hidden", "");
        document.documentElement.classList.add("splash-seen");
        document.documentElement.classList.remove("splash-open");
      } else {
        document.documentElement.classList.add("splash-open");
        var go = splash.querySelector(".splash__go");
        if (go) {
          go.focus();
        }
        splash.querySelectorAll("[data-splash-dismiss]").forEach(function (el) {
          el.addEventListener("click", function () {
            dismissSplash(splash);
          });
        });
        document.addEventListener("keydown", function (e) {
          if (e.key === "Escape" && !splash.hasAttribute("hidden")) {
            dismissSplash(splash);
          }
        });
      }
    }

    var shell = document.querySelector(".stage-shell");
    var framesBtn = document.querySelector(".frames-toggle");
    if (shell && framesBtn) {
      var on = false;
      try {
        on = localStorage.getItem(FRAMES_KEY) === "1";
      } catch (e) {}
      var apply = function () {
        shell.classList.toggle("frames-on", on);
        framesBtn.setAttribute("aria-pressed", on ? "true" : "false");
      };
      apply();
      framesBtn.addEventListener("click", function () {
        on = !on;
        try {
          localStorage.setItem(FRAMES_KEY, on ? "1" : "0");
        } catch (e) {}
        apply();
      });
    }

    var modal = document.getElementById("imageModal");
    if (modal) {
      var modalImg = document.getElementById("modalImage");
      var closeBtn = modal.querySelector(".close");
      document.querySelectorAll(".project-gallery img").forEach(function (img) {
        img.addEventListener("click", function () {
          if (!modalImg) {
            return;
          }
          modal.classList.add("show");
          modal.removeAttribute("hidden");
          modalImg.src = this.src;
          modalImg.alt = this.alt || "";
        });
      });
      var closeModal = function () {
        modal.classList.remove("show");
        modal.setAttribute("hidden", "");
      };
      if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
      }
      modal.addEventListener("click", function (e) {
        if (e.target === modal) {
          closeModal();
        }
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal.classList.contains("show")) {
          closeModal();
        }
      });
    }
  });
})();
