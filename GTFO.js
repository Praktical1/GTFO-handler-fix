Hub.Handler.Version = 6; // Released at https://hub.splitscreen.me/ on Thu Jul 08 2021 00:36:37 GMT+0000 (UTC).
Hub.Handler.Id = "oaJFWFvNvPG6kfgqc";
Hub.Maintainer.Name = "Talos91";
Hub.Maintainer.Id = "eeL7HAz8zJovChWw4";

Game.ExecutableContext = ["GTFO_Data"];
Game.DirSymlinkExclusions = ["GTFO_Data\\Plugins\\x86_64"];
Game.FileSymlinkExclusions = ["steam_api64.dll", "steam_appid.txt", "xinput1_3.dll", "Custom.dll", "dlllist.txt", "winmm.dll"];
Game.GameName = "GTFO";
Game.HandlerInterval = 50;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = true;
Game.ExecutableName = "GTFO.exe";
Game.SteamID = "493520";
Game.GUID = "GTFO";
Game.HideTaskbar = false;
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.UseGoldberg = true;
Game.LauncherTitle = "";
Game.Hook.ForceFocus = true;
Game.Hook.ForceFocusWindowName = "GTFO";
Game.FakeFocus = true;
Game.SetWindowHook = true;
Game.SetForegroundWindowElsewhere = true;
Game.Hook.DInputEnabled = false;
Game.Hook.XInputEnabled = true;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;
Game.XInputPlusDll = ["xinput1_3.dll"];
Game.UserProfileConfigPath = "AppData\\LocalLow\\10 Chambers Collective\\GTFO";
Game.Description =
  "CLOSE Steam before running this. Wait until all instances have started to press start game in each instance. To connect the instances host a lobby in one instance and select the copy lobby to clipboard option, then the other instances can join by selecting the clipboard lobby option that will appear in red in the level selection menu. Set your main game to windowed if instances open in fullscreen, reduce graphics in your main game to improve performance.";
Game.KeepSymLinkOnExit = false;
Game.PauseBetweenStarts = 20;

Game.SupportsMultipleKeyboardsAndMice = false;

Game.HookSetCursorPos = true;
Game.HookGetCursorPos = true;
Game.HookGetKeyState = false;
Game.HookGetAsyncKeyState = false;
Game.HookGetKeyboardState = false;
Game.HookFilterRawInput = true;
Game.HookFilterMouseMessages = false;
Game.HookUseLegacyInput = false;
Game.HookDontUpdateLegacyInMouseMsg = false;
Game.HookMouseVisibility = false;

Game.SendNormalMouseInput = true;
Game.SendNormalKeyboardInput = true;
Game.SendScrollWheel = true;
Game.ForwardRawKeyboardInput = false;
Game.ForwardRawMouseInput = false;
Game.HookReRegisterRawInput = true;
Game.HookReRegisterRawInputMouse = true;
Game.HookReRegisterRawInputKeyboard = false;
Game.DrawFakeMouseCursor = false;
Game.LockInputAtStart = false;
Game.LockInputToggleKey = 0x23;

Game.Play = function() {
  var Args = (Context.Args = " -screen-fullscreen 0 -popupwindow " + " -screen-width " + Context.Width + " -screen-height " + Context.Height);

  Context.StartArguments = Args;

  var txtPath = Context.NucleusUserRoot + "\\AppData\\LocalLow\\10 Chambers Collective\\GTFO\\GTFO_Settings.txt";
  var dict = [
    '90|        "x": ' + Context.Width + ",",
    '91|        "y": ' + Context.Height + ",",
    '93|          "x": 0.962650955,',
    '94|          "y": 0.270745575,'
  ];
  Context.ReplaceLinesInTextFile(txtPath, dict);

  var txtPath = Context.NucleusUserRoot + "\\AppData\\LocalLow\\10 Chambers Collective\\GTFO\\GTFO_Settings.txt";
  var dict = [
    '103|      "Value": 3',
    '106|      "Value": 70',
    '115|      "Value": 0',
    '121|      "Value": false',
    '124|      "Value": false',
    '130|      "Value": 0',
    '133|      "Value": 0',
    '139|      "Value": false',
    '142|      "Value": 1',
    '145|      "Value": 1',
    '148|      "Value": 1',
    '151|      "Value": false',
    '163|      "Value": false'
  ];
  Context.ReplaceLinesInTextFile(txtPath, dict);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\10 Chambers Collective\\GTFO", "Screenmanager Fullscreen mode_h3630240806", 3, Nucleus.RegType.DWord);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\10 Chambers Collective\\GTFO", "Screenmanager Resolution Height_h2627697771", Context.Height, Nucleus.RegType.DWord);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\10 Chambers Collective\\GTFO", "Screenmanager Resolution Width_h182942802", Context.Width, Nucleus.RegType.DWord);

  Context.EditRegKey("HKEY_CURRENT_USER", "SOFTWARE\\10 Chambers Collective\\GTFO", "Screenmanager Resolution Use Native_h1405027254", 0, Nucleus.RegType.DWord);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\Custom.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "Custom.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\dlllist.txt");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "dlllist.txt");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\winmm.dll");
  var savePkgOrigin = System.IO.Path.Combine(Game.Folder, "winmm.dll");
  System.IO.File.Copy(savePkgOrigin, savePath, true);
};
