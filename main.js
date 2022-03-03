/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// main.ts
__export(exports, {
  default: () => MyPlugin
});
var import_obsidian = __toModule(require("obsidian"));
var DEFAULT_SETTINGS = {
  mySetting: "default"
};
var MyPlugin = class extends import_obsidian.Plugin {
  onload() {
    return __async(this, null, function* () {
      yield this.loadSettings();
      console.log(document.getElementsByClassName("nav-folder-title")[0]);
      this.app.workspace.on("file-open", (e) => {
        console.log(e, this.relatedNotes);
        if (this.relatedNotes && e.basename.contains(".excalidraw")) {
          window.setTimeout(() => __async(this, null, function* () {
            const ea = window.ExcalidrawAutomate;
            ea.reset();
            ea.setView("active");
            const count = ea.getViewElements().filter((ele) => ele.type === "text").length;
            this.relatedNotes.forEach((note, index) => {
              ea.addText((count + index) % 10 * 400, Math.floor((count + index) / 10) * 400, "![[" + note.basename + "]]", { width: 300, box: "box" });
            });
            this.relatedNotes = [];
            yield ea.addElementsToView();
          }), 2e3);
        }
      });
      const ribbonIconEl = this.addRibbonIcon("dice", "Sample Plugin", (evt) => __async(this, null, function* () {
        const file = this.app.workspace.activeLeaf.view.file;
        this.relatedNotes = this.relatedNotes || [];
        this.relatedNotes.push(file);
        const embedLink = "![[" + file.basename + "]]";
        new import_obsidian.Notice(embedLink);
      }));
      ribbonIconEl.addClass("my-plugin-ribbon-class");
      const statusBarItemEl = this.addStatusBarItem();
      statusBarItemEl.setText("Status Bar Text");
      this.addCommand({
        id: "open-sample-modal-simple",
        name: "Open sample modal (simple)",
        callback: () => {
          new SampleModal(this.app).open();
        }
      });
      this.addCommand({
        id: "sample-editor-command",
        name: "Sample editor command",
        editorCallback: (editor, view) => {
          console.log(editor.getSelection());
          editor.replaceSelection("Sample Editor Command");
        }
      });
      this.addCommand({
        id: "open-sample-modal-complex",
        name: "Open sample modal (complex)",
        checkCallback: (checking) => {
          const markdownView = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
          if (markdownView) {
            if (!checking) {
              new SampleModal(this.app).open();
            }
            return true;
          }
        }
      });
      this.addSettingTab(new SampleSettingTab(this.app, this));
      this.registerDomEvent(document, "click", (evt) => {
      });
      this.registerInterval(window.setInterval(() => console.log("setInterval"), 5 * 60 * 1e3));
    });
  }
  onunload() {
    console.log("unload");
    this.app.workspace.off("file-open", () => {
    });
    this.app.workspace.off("active-leaf-change", () => {
    });
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
    });
  }
  saveSettings() {
    return __async(this, null, function* () {
      yield this.saveData(this.settings);
    });
  }
};
var SampleModal = class extends import_obsidian.Modal {
  constructor(app) {
    super(app);
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.setText("Woah!");
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
var SampleSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Settings for my awesome plugin." });
    new import_obsidian.Setting(containerEl).setName("Setting #1").setDesc("It's a secret").addText((text) => text.setPlaceholder("Enter your secret").setValue(this.plugin.settings.mySetting).onChange((value) => __async(this, null, function* () {
      console.log("Secret: " + value);
      this.plugin.settings.mySetting = value;
      yield this.plugin.saveSettings();
    })));
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtcclxuXHRBcHAsXHJcblx0RWRpdG9yLFxyXG5cdE1hcmtkb3duVmlldyxcclxuXHRNb2RhbCxcclxuXHROb3RpY2UsXHJcblx0UGx1Z2luLFxyXG5cdFBsdWdpblNldHRpbmdUYWIsXHJcblx0U2V0dGluZyxcclxufSBmcm9tIFwib2JzaWRpYW5cIjtcclxuXHJcbi8vIFJlbWVtYmVyIHRvIHJlbmFtZSB0aGVzZSBjbGFzc2VzIGFuZCBpbnRlcmZhY2VzIVxyXG5cclxuaW50ZXJmYWNlIE15UGx1Z2luU2V0dGluZ3Mge1xyXG5cdG15U2V0dGluZzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBNeVBsdWdpblNldHRpbmdzID0ge1xyXG5cdG15U2V0dGluZzogXCJkZWZhdWx0XCIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeVBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XHJcblx0c2V0dGluZ3M6IE15UGx1Z2luU2V0dGluZ3M7XHJcblx0cmVsYXRlZE5vdGVzOiBhbnlbXTtcclxuXHRhc3luYyBvbmxvYWQoKSB7XHJcblx0XHRhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xyXG5cdFx0Y29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdi1mb2xkZXItdGl0bGVcIilbMF0pO1xyXG5cdFx0dGhpcy5hcHAud29ya3NwYWNlLm9uKFwiZmlsZS1vcGVuXCIsIChlKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUsIHRoaXMucmVsYXRlZE5vdGVzKTtcclxuXHRcdFx0aWYgKHRoaXMucmVsYXRlZE5vdGVzICYmIGUuYmFzZW5hbWUuY29udGFpbnMoXCIuZXhjYWxpZHJhd1wiKSkge1xyXG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IGVhID0gd2luZG93LkV4Y2FsaWRyYXdBdXRvbWF0ZTtcclxuXHRcdFx0XHRcdGVhLnJlc2V0KCk7XHJcblx0XHRcdFx0XHRlYS5zZXRWaWV3KFwiYWN0aXZlXCIpO1xyXG5cdFx0XHRcdFx0Y29uc3QgY291bnQgPSBlYVxyXG5cdFx0XHRcdFx0XHQuZ2V0Vmlld0VsZW1lbnRzKClcclxuXHRcdFx0XHRcdFx0LmZpbHRlcihcclxuXHRcdFx0XHRcdFx0XHQoZWxlOiB7IHR5cGU6IHN0cmluZyB9KSA9PiBlbGUudHlwZSA9PT0gXCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0KS5sZW5ndGg7XHJcblx0XHRcdFx0XHR0aGlzLnJlbGF0ZWROb3Rlcy5mb3JFYWNoKFxyXG5cdFx0XHRcdFx0XHQobm90ZTogeyBiYXNlbmFtZTogYW55IH0sIGluZGV4OiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRlYS5hZGRUZXh0KFxyXG5cdFx0XHRcdFx0XHRcdFx0KChjb3VudCArIGluZGV4KSAlIDEwKSAqIDQwMCxcclxuXHRcdFx0XHRcdFx0XHRcdE1hdGguZmxvb3IoKGNvdW50ICsgaW5kZXgpIC8gMTApICogNDAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCIhW1tcIiArIG5vdGUuYmFzZW5hbWUgKyBcIl1dXCIsXHJcblx0XHRcdFx0XHRcdFx0XHR7IHdpZHRoOiAzMDAsIGJveDogXCJib3hcIiB9XHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdHRoaXMucmVsYXRlZE5vdGVzID0gW107XHJcblxyXG5cdFx0XHRcdFx0YXdhaXQgZWEuYWRkRWxlbWVudHNUb1ZpZXcoKTtcclxuXHRcdFx0XHR9LCAyMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHQvLyBUaGlzIGNyZWF0ZXMgYW4gaWNvbiBpbiB0aGUgbGVmdCByaWJib24uXHJcblx0XHRjb25zdCByaWJib25JY29uRWwgPSB0aGlzLmFkZFJpYmJvbkljb24oXHJcblx0XHRcdFwiZGljZVwiLFxyXG5cdFx0XHRcIlNhbXBsZSBQbHVnaW5cIixcclxuXHRcdFx0YXN5bmMgKGV2dDogTW91c2VFdmVudCkgPT4ge1xyXG5cdFx0XHRcdC8vIENhbGxlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyB0aGUgaWNvbi5cclxuXHRcdFx0XHRjb25zdCBmaWxlID0gdGhpcy5hcHAud29ya3NwYWNlLmFjdGl2ZUxlYWYudmlldy5maWxlO1xyXG5cdFx0XHRcdHRoaXMucmVsYXRlZE5vdGVzID0gdGhpcy5yZWxhdGVkTm90ZXMgfHwgW107XHJcblx0XHRcdFx0dGhpcy5yZWxhdGVkTm90ZXMucHVzaChmaWxlKTtcclxuXHRcdFx0XHRjb25zdCBlbWJlZExpbmsgPSBcIiFbW1wiICsgZmlsZS5iYXNlbmFtZSArIFwiXV1cIjtcclxuXHRcdFx0XHRuZXcgTm90aWNlKGVtYmVkTGluayk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0XHQvLyBQZXJmb3JtIGFkZGl0aW9uYWwgdGhpbmdzIHdpdGggdGhlIHJpYmJvblxyXG5cdFx0cmliYm9uSWNvbkVsLmFkZENsYXNzKFwibXktcGx1Z2luLXJpYmJvbi1jbGFzc1wiKTtcclxuXHJcblx0XHQvLyBUaGlzIGFkZHMgYSBzdGF0dXMgYmFyIGl0ZW0gdG8gdGhlIGJvdHRvbSBvZiB0aGUgYXBwLiBEb2VzIG5vdCB3b3JrIG9uIG1vYmlsZSBhcHBzLlxyXG5cdFx0Y29uc3Qgc3RhdHVzQmFySXRlbUVsID0gdGhpcy5hZGRTdGF0dXNCYXJJdGVtKCk7XHJcblx0XHRzdGF0dXNCYXJJdGVtRWwuc2V0VGV4dChcIlN0YXR1cyBCYXIgVGV4dFwiKTtcclxuXHJcblx0XHQvLyBUaGlzIGFkZHMgYSBzaW1wbGUgY29tbWFuZCB0aGF0IGNhbiBiZSB0cmlnZ2VyZWQgYW55d2hlcmVcclxuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XHJcblx0XHRcdGlkOiBcIm9wZW4tc2FtcGxlLW1vZGFsLXNpbXBsZVwiLFxyXG5cdFx0XHRuYW1lOiBcIk9wZW4gc2FtcGxlIG1vZGFsIChzaW1wbGUpXCIsXHJcblx0XHRcdGNhbGxiYWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0bmV3IFNhbXBsZU1vZGFsKHRoaXMuYXBwKS5vcGVuKCk7XHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdC8vIFRoaXMgYWRkcyBhbiBlZGl0b3IgY29tbWFuZCB0aGF0IGNhbiBwZXJmb3JtIHNvbWUgb3BlcmF0aW9uIG9uIHRoZSBjdXJyZW50IGVkaXRvciBpbnN0YW5jZVxyXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcclxuXHRcdFx0aWQ6IFwic2FtcGxlLWVkaXRvci1jb21tYW5kXCIsXHJcblx0XHRcdG5hbWU6IFwiU2FtcGxlIGVkaXRvciBjb21tYW5kXCIsXHJcblx0XHRcdGVkaXRvckNhbGxiYWNrOiAoZWRpdG9yOiBFZGl0b3IsIHZpZXc6IE1hcmtkb3duVmlldykgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVkaXRvci5nZXRTZWxlY3Rpb24oKSk7XHJcblx0XHRcdFx0ZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oXCJTYW1wbGUgRWRpdG9yIENvbW1hbmRcIik7XHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHRcdC8vIFRoaXMgYWRkcyBhIGNvbXBsZXggY29tbWFuZCB0aGF0IGNhbiBjaGVjayB3aGV0aGVyIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBhcHAgYWxsb3dzIGV4ZWN1dGlvbiBvZiB0aGUgY29tbWFuZFxyXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcclxuXHRcdFx0aWQ6IFwib3Blbi1zYW1wbGUtbW9kYWwtY29tcGxleFwiLFxyXG5cdFx0XHRuYW1lOiBcIk9wZW4gc2FtcGxlIG1vZGFsIChjb21wbGV4KVwiLFxyXG5cdFx0XHRjaGVja0NhbGxiYWNrOiAoY2hlY2tpbmc6IGJvb2xlYW4pID0+IHtcclxuXHRcdFx0XHQvLyBDb25kaXRpb25zIHRvIGNoZWNrXHJcblx0XHRcdFx0Y29uc3QgbWFya2Rvd25WaWV3ID1cclxuXHRcdFx0XHRcdHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XHJcblx0XHRcdFx0aWYgKG1hcmtkb3duVmlldykge1xyXG5cdFx0XHRcdFx0Ly8gSWYgY2hlY2tpbmcgaXMgdHJ1ZSwgd2UncmUgc2ltcGx5IFwiY2hlY2tpbmdcIiBpZiB0aGUgY29tbWFuZCBjYW4gYmUgcnVuLlxyXG5cdFx0XHRcdFx0Ly8gSWYgY2hlY2tpbmcgaXMgZmFsc2UsIHRoZW4gd2Ugd2FudCB0byBhY3R1YWxseSBwZXJmb3JtIHRoZSBvcGVyYXRpb24uXHJcblx0XHRcdFx0XHRpZiAoIWNoZWNraW5nKSB7XHJcblx0XHRcdFx0XHRcdG5ldyBTYW1wbGVNb2RhbCh0aGlzLmFwcCkub3BlbigpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIFRoaXMgY29tbWFuZCB3aWxsIG9ubHkgc2hvdyB1cCBpbiBDb21tYW5kIFBhbGV0dGUgd2hlbiB0aGUgY2hlY2sgZnVuY3Rpb24gcmV0dXJucyB0cnVlXHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBUaGlzIGFkZHMgYSBzZXR0aW5ncyB0YWIgc28gdGhlIHVzZXIgY2FuIGNvbmZpZ3VyZSB2YXJpb3VzIGFzcGVjdHMgb2YgdGhlIHBsdWdpblxyXG5cdFx0dGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBTYW1wbGVTZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XHJcblxyXG5cdFx0Ly8gSWYgdGhlIHBsdWdpbiBob29rcyB1cCBhbnkgZ2xvYmFsIERPTSBldmVudHMgKG9uIHBhcnRzIG9mIHRoZSBhcHAgdGhhdCBkb2Vzbid0IGJlbG9uZyB0byB0aGlzIHBsdWdpbilcclxuXHRcdC8vIFVzaW5nIHRoaXMgZnVuY3Rpb24gd2lsbCBhdXRvbWF0aWNhbGx5IHJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXIgd2hlbiB0aGlzIHBsdWdpbiBpcyBkaXNhYmxlZC5cclxuXHRcdHRoaXMucmVnaXN0ZXJEb21FdmVudChkb2N1bWVudCwgXCJjbGlja1wiLCAoZXZ0OiBNb3VzZUV2ZW50KSA9PiB7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdjbGljaycsIGV2dCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBXaGVuIHJlZ2lzdGVyaW5nIGludGVydmFscywgdGhpcyBmdW5jdGlvbiB3aWxsIGF1dG9tYXRpY2FsbHkgY2xlYXIgdGhlIGludGVydmFsIHdoZW4gdGhlIHBsdWdpbiBpcyBkaXNhYmxlZC5cclxuXHRcdHRoaXMucmVnaXN0ZXJJbnRlcnZhbChcclxuXHRcdFx0d2luZG93LnNldEludGVydmFsKCgpID0+IGNvbnNvbGUubG9nKFwic2V0SW50ZXJ2YWxcIiksIDUgKiA2MCAqIDEwMDApXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0b251bmxvYWQoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcInVubG9hZFwiKTtcclxuXHRcdHRoaXMuYXBwLndvcmtzcGFjZS5vZmYoXCJmaWxlLW9wZW5cIiwgKCkgPT4ge30pO1xyXG5cdFx0dGhpcy5hcHAud29ya3NwYWNlLm9mZihcImFjdGl2ZS1sZWFmLWNoYW5nZVwiLCAoKSA9PiB7fSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBsb2FkU2V0dGluZ3MoKSB7XHJcblx0XHR0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbihcclxuXHRcdFx0e30sXHJcblx0XHRcdERFRkFVTFRfU0VUVElOR1MsXHJcblx0XHRcdGF3YWl0IHRoaXMubG9hZERhdGEoKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcclxuXHRcdGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBTYW1wbGVNb2RhbCBleHRlbmRzIE1vZGFsIHtcclxuXHRjb25zdHJ1Y3RvcihhcHA6IEFwcCkge1xyXG5cdFx0c3VwZXIoYXBwKTtcclxuXHR9XHJcblxyXG5cdG9uT3BlbigpIHtcclxuXHRcdGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzO1xyXG5cdFx0Y29udGVudEVsLnNldFRleHQoXCJXb2FoIVwiKTtcclxuXHR9XHJcblxyXG5cdG9uQ2xvc2UoKSB7XHJcblx0XHRjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpcztcclxuXHRcdGNvbnRlbnRFbC5lbXB0eSgpO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgU2FtcGxlU2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xyXG5cdHBsdWdpbjogTXlQbHVnaW47XHJcblxyXG5cdGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IE15UGx1Z2luKSB7XHJcblx0XHRzdXBlcihhcHAsIHBsdWdpbik7XHJcblx0XHR0aGlzLnBsdWdpbiA9IHBsdWdpbjtcclxuXHR9XHJcblxyXG5cdGRpc3BsYXkoKTogdm9pZCB7XHJcblx0XHRjb25zdCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xyXG5cclxuXHRcdGNvbnRhaW5lckVsLmVtcHR5KCk7XHJcblxyXG5cdFx0Y29udGFpbmVyRWwuY3JlYXRlRWwoXCJoMlwiLCB7IHRleHQ6IFwiU2V0dGluZ3MgZm9yIG15IGF3ZXNvbWUgcGx1Z2luLlwiIH0pO1xyXG5cclxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG5cdFx0XHQuc2V0TmFtZShcIlNldHRpbmcgIzFcIilcclxuXHRcdFx0LnNldERlc2MoXCJJdCdzIGEgc2VjcmV0XCIpXHJcblx0XHRcdC5hZGRUZXh0KCh0ZXh0KSA9PlxyXG5cdFx0XHRcdHRleHRcclxuXHRcdFx0XHRcdC5zZXRQbGFjZWhvbGRlcihcIkVudGVyIHlvdXIgc2VjcmV0XCIpXHJcblx0XHRcdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MubXlTZXR0aW5nKVxyXG5cdFx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlNlY3JldDogXCIgKyB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLm15U2V0dGluZyA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0XHRhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdCk7XHJcblx0fVxyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBU087QUFRUCxJQUFNLG1CQUFxQztBQUFBLEVBQzFDLFdBQVc7QUFBQTtBQUdaLDZCQUFzQyx1QkFBTztBQUFBLEVBR3RDLFNBQVM7QUFBQTtBQUNkLFlBQU0sS0FBSztBQUNYLGNBQVEsSUFBSSxTQUFTLHVCQUF1QixvQkFBb0I7QUFDaEUsV0FBSyxJQUFJLFVBQVUsR0FBRyxhQUFhLENBQUMsTUFBTTtBQUN6QyxnQkFBUSxJQUFJLEdBQUcsS0FBSztBQUNwQixZQUFJLEtBQUssZ0JBQWdCLEVBQUUsU0FBUyxTQUFTLGdCQUFnQjtBQUM1RCxpQkFBTyxXQUFXLE1BQVk7QUFDN0Isa0JBQU0sS0FBSyxPQUFPO0FBQ2xCLGVBQUc7QUFDSCxlQUFHLFFBQVE7QUFDWCxrQkFBTSxRQUFRLEdBQ1osa0JBQ0EsT0FDQSxDQUFDLFFBQTBCLElBQUksU0FBUyxRQUN2QztBQUNILGlCQUFLLGFBQWEsUUFDakIsQ0FBQyxNQUF5QixVQUFlO0FBQ3hDLGlCQUFHLFFBQ0EsU0FBUSxTQUFTLEtBQU0sS0FDekIsS0FBSyxNQUFPLFNBQVEsU0FBUyxNQUFNLEtBQ25DLFFBQVEsS0FBSyxXQUFXLE1BQ3hCLEVBQUUsT0FBTyxLQUFLLEtBQUs7QUFBQTtBQUl0QixpQkFBSyxlQUFlO0FBRXBCLGtCQUFNLEdBQUc7QUFBQSxjQUNQO0FBQUE7QUFBQTtBQUlMLFlBQU0sZUFBZSxLQUFLLGNBQ3pCLFFBQ0EsaUJBQ0EsQ0FBTyxRQUFvQjtBQUUxQixjQUFNLE9BQU8sS0FBSyxJQUFJLFVB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
