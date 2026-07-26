System.register("chunks:///_virtual/ad-manager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fd257oJRgZHFoN5wDrAq13m", "ad-manager", undefined);
      var AdManager = exports('AdManager', /*#__PURE__*/function () {
        function AdManager(adService, timer) {
          this.adService = adService;
          this.timer = timer;
        }
        var _proto = AdManager.prototype;
        _proto.requestHighlighter = /*#__PURE__*/function () {
          var _requestHighlighter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(session) {
            var paused, result;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(session.adSkillUseCount >= session.level.config.skillLimit)) {
                    _context.next = 2;
                    break;
                  }
                  throw new Error('The level skill limit has been reached.');
                case 2:
                  paused = this.timer.pauseForRewardedAd();
                  _context.prev = 3;
                  _context.next = 6;
                  return this.adService.showRewardedAd();
                case 6:
                  result = _context.sent;
                  if (!(result !== 'completed')) {
                    _context.next = 9;
                    break;
                  }
                  return _context.abrupt("return", {
                    result: result,
                    highlightedCellIndex: null
                  });
                case 9:
                  if (session.registerSkillUse('ad-highlight')) {
                    _context.next = 11;
                    break;
                  }
                  throw new Error('The level skill limit has been reached.');
                case 11:
                  return _context.abrupt("return", {
                    result: result,
                    highlightedCellIndex: session.nextIncorrectTargetIndex()
                  });
                case 12:
                  _context.prev = 12;
                  if (paused) {
                    this.timer.resumeAfterRewardedAd();
                  }
                  return _context.finish(12);
                case 15:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[3,, 12, 15]]);
          }));
          function requestHighlighter(_x) {
            return _requestHighlighter.apply(this, arguments);
          }
          return requestHighlighter;
        }();
        _proto.requestRepairTool = /*#__PURE__*/function () {
          var _requestRepairTool = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(session) {
            var paused, result;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(session.adSkillUseCount >= session.level.config.skillLimit)) {
                    _context2.next = 2;
                    break;
                  }
                  throw new Error('The level skill limit has been reached.');
                case 2:
                  paused = this.timer.pauseForRewardedAd();
                  _context2.prev = 3;
                  _context2.next = 6;
                  return this.adService.showRewardedAd();
                case 6:
                  result = _context2.sent;
                  if (!(result !== 'completed')) {
                    _context2.next = 9;
                    break;
                  }
                  return _context2.abrupt("return", {
                    result: result,
                    repairCount: session.repairCount
                  });
                case 9:
                  if (session.registerSkillUse('repair-tweezers')) {
                    _context2.next = 11;
                    break;
                  }
                  throw new Error('The level skill limit has been reached.');
                case 11:
                  session.grantRepairCount();
                  return _context2.abrupt("return", {
                    result: result,
                    repairCount: session.repairCount
                  });
                case 13:
                  _context2.prev = 13;
                  if (paused) {
                    this.timer.resumeAfterRewardedAd();
                  }
                  return _context2.finish(13);
                case 16:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[3,, 13, 16]]);
          }));
          function requestRepairTool(_x2) {
            return _requestRepairTool.apply(this, arguments);
          }
          return requestRepairTool;
        }();
        return AdManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/anti-cheat-validator.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cdaafGM3iJK5ZCP/82wlPBX", "anti-cheat-validator", undefined);
      var AntiCheatValidator = exports('AntiCheatValidator', /*#__PURE__*/function () {
        function AntiCheatValidator() {}
        var _proto = AntiCheatValidator.prototype;
        _proto.validate = function validate(score, targetCount, timerSuspicious) {
          var reasons = [];
          if (timerSuspicious) {
            reasons.push('timer-clock-anomaly');
          }
          if (score.completionTimeMs < targetCount * 80) {
            reasons.push('below-local-theoretical-minimum');
          }
          if (score.effectiveOperationCount < targetCount) {
            reasons.push('insufficient-effective-operations');
          }
          if (score.skillUseCount < 0 || score.errorCount < 0) {
            reasons.push('negative-counter');
          }
          return {
            suspicious: reasons.length > 0,
            reasons: reasons
          };
        };
        return AntiCheatValidator;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/app-controller.component.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ad-manager.ts', './creative-workshop.ts', './custom-pattern.ts', './difficulty-calculator.ts', './economics.ts', './friendship-skill.ts', './game-manager.ts', './honor-manager.ts', './level-manager.component.ts', './level-session.ts', './point-manager.ts', './reward-manager.ts', './score-calculator.ts', './local-storage-service.ts', './mock-services.ts', './bead-board.component.ts', './creative-board.component.ts', './ui-factory.component.ts'], function (exports) {
  var _inheritsLoose, _extends, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, setDisplayStats, game, Game, Node, UITransform, SafeArea, Vec3, Color, BlockInputEvents, Graphics, Label, Component, sys, AdManager, CreativeWorkshopSession, CREATIVE_AD_GRANT_COUNT, CREATIVE_SHARE_GRANT_PER_COLOR, CREATIVE_PALETTE, CREATIVE_MAX_SHARE_PACKS, CREATIVE_MIN_PUBLISH_BEADS, buildCreativeMonthlyLikeRanking, createInitialCreativeWorkshopState, CreativeWorkshopManager, isCreativeWorkshopState, buildCustomPattern, calculateDifficulty, calculatePointRewardPolicy, calculateCustomPayablePrice, PHYSICAL_STANDARD_REFERENCE_POINTS, useFriendshipInsight, GameManager, createInitialHonorState, HonorManager, LevelManager, LevelSession, createEmptyPointState, PointManager, createInitialRewardState, RewardManager, ScoreCalculator, LocalStorageService, MOCK_USER, MockAdService, MockShareService, MockRankingService, BeadBoard, CreativeBoard, createRect, COLORS, createLabel, createButton, parseHexColor;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _extends = module.extends;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      setDisplayStats = module.setDisplayStats;
      game = module.game;
      Game = module.Game;
      Node = module.Node;
      UITransform = module.UITransform;
      SafeArea = module.SafeArea;
      Vec3 = module.Vec3;
      Color = module.Color;
      BlockInputEvents = module.BlockInputEvents;
      Graphics = module.Graphics;
      Label = module.Label;
      Component = module.Component;
      sys = module.sys;
    }, function (module) {
      AdManager = module.AdManager;
    }, function (module) {
      CreativeWorkshopSession = module.CreativeWorkshopSession;
      CREATIVE_AD_GRANT_COUNT = module.CREATIVE_AD_GRANT_COUNT;
      CREATIVE_SHARE_GRANT_PER_COLOR = module.CREATIVE_SHARE_GRANT_PER_COLOR;
      CREATIVE_PALETTE = module.CREATIVE_PALETTE;
      CREATIVE_MAX_SHARE_PACKS = module.CREATIVE_MAX_SHARE_PACKS;
      CREATIVE_MIN_PUBLISH_BEADS = module.CREATIVE_MIN_PUBLISH_BEADS;
      buildCreativeMonthlyLikeRanking = module.buildCreativeMonthlyLikeRanking;
      createInitialCreativeWorkshopState = module.createInitialCreativeWorkshopState;
      CreativeWorkshopManager = module.CreativeWorkshopManager;
      isCreativeWorkshopState = module.isCreativeWorkshopState;
    }, function (module) {
      buildCustomPattern = module.buildCustomPattern;
    }, function (module) {
      calculateDifficulty = module.calculateDifficulty;
      calculatePointRewardPolicy = module.calculatePointRewardPolicy;
    }, function (module) {
      calculateCustomPayablePrice = module.calculateCustomPayablePrice;
      PHYSICAL_STANDARD_REFERENCE_POINTS = module.PHYSICAL_STANDARD_REFERENCE_POINTS;
    }, function (module) {
      useFriendshipInsight = module.useFriendshipInsight;
    }, function (module) {
      GameManager = module.GameManager;
    }, function (module) {
      createInitialHonorState = module.createInitialHonorState;
      HonorManager = module.HonorManager;
    }, function (module) {
      LevelManager = module.LevelManager;
    }, function (module) {
      LevelSession = module.LevelSession;
    }, function (module) {
      createEmptyPointState = module.createEmptyPointState;
      PointManager = module.PointManager;
    }, function (module) {
      createInitialRewardState = module.createInitialRewardState;
      RewardManager = module.RewardManager;
    }, function (module) {
      ScoreCalculator = module.ScoreCalculator;
    }, function (module) {
      LocalStorageService = module.LocalStorageService;
    }, function (module) {
      MOCK_USER = module.MOCK_USER;
      MockAdService = module.MockAdService;
      MockShareService = module.MockShareService;
      MockRankingService = module.MockRankingService;
    }, function (module) {
      BeadBoard = module.BeadBoard;
    }, function (module) {
      CreativeBoard = module.CreativeBoard;
    }, function (module) {
      createRect = module.createRect;
      COLORS = module.COLORS;
      createLabel = module.createLabel;
      createButton = module.createButton;
      parseHexColor = module.parseHexColor;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "dbb61lKOJVAJ66eKuNnwwHN", "app-controller.component", undefined);
      var ccclass = _decorator.ccclass;
      var APP_VERSION = '0.2.0-beta.1';
      var BrowserStorageBackend = /*#__PURE__*/function () {
        function BrowserStorageBackend() {}
        var _proto = BrowserStorageBackend.prototype;
        _proto.getItem = function getItem(key) {
          return sys.localStorage.getItem(key);
        };
        _proto.setItem = function setItem(key, value) {
          sys.localStorage.setItem(key, value);
        };
        return BrowserStorageBackend;
      }();
      function createDefaultSave() {
        return {
          version: 2,
          unlockedLevelIds: ['tutorial-heart-01'],
          completedLevelIds: [],
          scores: [],
          pointState: createEmptyPointState(),
          rewardState: createInitialRewardState(),
          honorState: createInitialHonorState(),
          creativeState: createInitialCreativeWorkshopState(),
          testerGuideSeen: false,
          settings: {
            music: true,
            sound: true,
            vibration: true
          }
        };
      }
      function normalizeLevelProgress(save) {
        var obsoleteLevelIds = new Set(['orange-cat-01', 'orange-cat-02']);
        save.unlockedLevelIds = save.unlockedLevelIds.filter(function (levelId) {
          return !obsoleteLevelIds.has(levelId);
        });
        save.completedLevelIds = save.completedLevelIds.filter(function (levelId) {
          return !obsoleteLevelIds.has(levelId);
        });
        save.scores = save.scores.filter(function (_ref) {
          var levelId = _ref.levelId;
          return !obsoleteLevelIds.has(levelId);
        });
        if (!save.unlockedLevelIds.includes('tutorial-heart-01')) {
          save.unlockedLevelIds.push('tutorial-heart-01');
        }
        if (!save.completedLevelIds.includes('orange-cat-03') && !save.completedLevelIds.includes('rainbow-balloon-02')) {
          save.unlockedLevelIds = save.unlockedLevelIds.filter(function (levelId) {
            return levelId !== 'orange-cat-03';
          });
        }
      }
      function isRecord(value) {
        return typeof value === 'object' && value !== null && !Array.isArray(value);
      }
      function isInteger(value, minimum) {
        if (minimum === void 0) {
          minimum = 0;
        }
        return Number.isInteger(value) && value >= minimum;
      }
      function isStringArray(value) {
        return Array.isArray(value) && value.every(function (item) {
          return typeof item === 'string';
        });
      }
      function isScoreSubmission(value) {
        if (!isRecord(value)) {
          return false;
        }
        return typeof value.submissionId === 'string' && typeof value.userId === 'string' && typeof value.nickname === 'string' && typeof value.avatar === 'string' && typeof value.levelId === 'string' && typeof value.setId === 'string' && isInteger(value.completionTimeMs) && isInteger(value.skillUseCount) && isInteger(value.errorCount) && isInteger(value.effectiveOperationCount) && isInteger(value.maxCorrectStreak) && isInteger(value.completedAt) && typeof value.weekKey === 'string' && (value.scoreType === 'normal' || value.scoreType === 'no-skill') && typeof value.clientVersion === 'string' && (value.scoreSignature === null || typeof value.scoreSignature === 'string') && typeof value.suspiciousFlag === 'boolean';
      }
      function isPointState(value) {
        if (!isRecord(value) || !isRecord(value.dailyRepeatCounts)) {
          return false;
        }
        return isInteger(value.availablePoints) && isInteger(value.frozenPoints) && isInteger(value.earnedPoints) && isInteger(value.redeemedPoints) && Array.isArray(value.transactions) && value.transactions.every(function (transaction) {
          return isRecord(transaction) && typeof transaction.transactionId === 'string' && typeof transaction.userId === 'string' && Number.isInteger(transaction.amount) && typeof transaction.type === 'string' && typeof transaction.sourceId === 'string' && typeof transaction.description === 'string' && isInteger(transaction.createdAt);
        }) && isStringArray(value.firstClearLevelIds) && isStringArray(value.perfectClearLevelIds) && Object.values(value.dailyRepeatCounts).every(function (count) {
          return isInteger(count);
        }) && isRecord(value.dailyRepeatAwardTotals) && Object.values(value.dailyRepeatAwardTotals).every(function (count) {
          return isInteger(count);
        });
      }
      function isRewardState(value) {
        if (!isRecord(value)) {
          return false;
        }
        var validStatuses = new Set(['pending', 'approved', 'rejected', 'preparing', 'shipped', 'completed']);
        return isInteger(value.keychainStock) && isStringArray(value.patternSetupPaidIds) && isStringArray(value.purchasedRewardIds) && Array.isArray(value.redemptions) && value.redemptions.every(function (record) {
          return isRecord(record) && typeof record.redemptionId === 'string' && typeof record.idempotencyKey === 'string' && typeof record.userId === 'string' && record.rewardId === 'orange-cat-keychain' && record.pointsCost === 500 && record.recipientName === '演示用户' && record.mobile === '138****0000' && record.region === '演示地区' && record.address === '仅用于原型展示，不是真实地址' && typeof record.status === 'string' && validStatuses.has(record.status) && (record.trackingNumber === null || typeof record.trackingNumber === 'string') && isInteger(record.createdAt) && (record.reviewedAt === null || isInteger(record.reviewedAt));
        });
      }
      function isHonorState(value) {
        if (!isRecord(value) || !isRecord(value.skillInventory)) {
          return false;
        }
        return isStringArray(value.achievementIds) && isInteger(value.skillInventory.friendshipInsightCards) && isRecord(value.skillInventory.lastAwardDateByLevel) && Object.values(value.skillInventory.lastAwardDateByLevel).every(function (dateKey) {
          return typeof dateKey === 'string';
        });
      }
      function isAppSaveData(value) {
        if (!isRecord(value) || !isRecord(value.settings)) {
          return false;
        }
        return value.version === 2 && isStringArray(value.unlockedLevelIds) && isStringArray(value.completedLevelIds) && Array.isArray(value.scores) && value.scores.every(isScoreSubmission) && isPointState(value.pointState) && isRewardState(value.rewardState) && isHonorState(value.honorState) && (value.creativeState === undefined || isCreativeWorkshopState(value.creativeState)) && (value.testerGuideSeen === undefined || typeof value.testerGuideSeen === 'boolean') && typeof value.settings.music === 'boolean' && typeof value.settings.sound === 'boolean' && typeof value.settings.vibration === 'boolean';
      }
      function migrateLegacySave(value) {
        var _pointState$available, _pointState$earnedPoi, _pointState$redeemedP;
        if (!isRecord(value) || value.version !== 1 || !isStringArray(value.unlockedLevelIds) || !isStringArray(value.completedLevelIds) || !Array.isArray(value.scores) || !isRecord(value.pointState) || !isRecord(value.rewardState) || !isRecord(value.settings)) {
          return null;
        }
        var migratedScores = value.scores.filter(isRecord).map(function (score) {
          var _score$submissionId, _score$userId, _score$nickname, _score$avatar, _score$levelId, _score$setId, _score$completionTime, _score$skillUseCount, _score$errorCount, _score$effectiveOpera, _score$completedAt, _score$clientVersion;
          return {
            submissionId: String((_score$submissionId = score.submissionId) != null ? _score$submissionId : ''),
            userId: String((_score$userId = score.userId) != null ? _score$userId : ''),
            nickname: String((_score$nickname = score.nickname) != null ? _score$nickname : ''),
            avatar: String((_score$avatar = score.avatar) != null ? _score$avatar : ''),
            levelId: String((_score$levelId = score.levelId) != null ? _score$levelId : ''),
            setId: String((_score$setId = score.setId) != null ? _score$setId : ''),
            completionTimeMs: Number((_score$completionTime = score.completionTimeMs) != null ? _score$completionTime : 0),
            skillUseCount: Number((_score$skillUseCount = score.skillUseCount) != null ? _score$skillUseCount : 0),
            errorCount: Number((_score$errorCount = score.errorCount) != null ? _score$errorCount : 0),
            effectiveOperationCount: Number((_score$effectiveOpera = score.effectiveOperationCount) != null ? _score$effectiveOpera : 0),
            maxCorrectStreak: 0,
            completedAt: Number((_score$completedAt = score.completedAt) != null ? _score$completedAt : 0),
            weekKey: 'legacy',
            scoreType: score.scoreType === 'normal' ? 'normal' : 'no-skill',
            clientVersion: String((_score$clientVersion = score.clientVersion) != null ? _score$clientVersion : '0.1.0'),
            scoreSignature: typeof score.scoreSignature === 'string' ? score.scoreSignature : null,
            suspiciousFlag: Boolean(score.suspiciousFlag)
          };
        }).filter(isScoreSubmission);
        var defaults = createDefaultSave();
        var pointState = value.pointState;
        var migratedPointState = {
          availablePoints: Number((_pointState$available = pointState.availablePoints) != null ? _pointState$available : 0),
          frozenPoints: 0,
          earnedPoints: Number((_pointState$earnedPoi = pointState.earnedPoints) != null ? _pointState$earnedPoi : 0),
          redeemedPoints: Number((_pointState$redeemedP = pointState.redeemedPoints) != null ? _pointState$redeemedP : 0),
          transactions: Array.isArray(pointState.transactions) ? pointState.transactions : [],
          firstClearLevelIds: isStringArray(pointState.firstClearLevelIds) ? pointState.firstClearLevelIds : [],
          perfectClearLevelIds: isStringArray(pointState.perfectClearLevelIds) ? pointState.perfectClearLevelIds : [],
          dailyRepeatCounts: isRecord(pointState.dailyRepeatCounts) ? pointState.dailyRepeatCounts : {},
          dailyRepeatAwardTotals: {}
        };
        return {
          version: 2,
          unlockedLevelIds: value.unlockedLevelIds,
          completedLevelIds: value.completedLevelIds,
          scores: migratedScores,
          pointState: isPointState(migratedPointState) ? migratedPointState : defaults.pointState,
          rewardState: _extends({}, createInitialRewardState(), {
            purchasedRewardIds: isStringArray(value.rewardState.purchasedRewardIds) ? value.rewardState.purchasedRewardIds : []
          }),
          honorState: createInitialHonorState(),
          testerGuideSeen: false,
          settings: {
            music: Boolean(value.settings.music),
            sound: Boolean(value.settings.sound),
            vibration: Boolean(value.settings.vibration)
          }
        };
      }
      var AppController = exports('AppController', (_dec = ccclass('AppController'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AppController, _Component);
        function AppController() {
          var _this$saveData$creati;
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.levelManager = new LevelManager();
          _this.scoreCalculator = new ScoreCalculator();
          _this.mockAdService = new MockAdService(3000);
          _this.mockShareService = new MockShareService();
          _this.storage = new LocalStorageService(new BrowserStorageBackend(), createDefaultSave, isAppSaveData, Date.now, migrateLegacySave);
          _this.rankingService = new MockRankingService(MOCK_USER.userId, ['tutorial-heart-01', 'rainbow-balloon-02', 'orange-cat-03']);
          _this.saveData = createDefaultSave();
          _this.pointManager = new PointManager(_this.saveData.pointState, MOCK_USER.userId, function () {
            return _this.createId('point');
          });
          _this.rewardManager = new RewardManager(_this.saveData.rewardState, _this.pointManager, MOCK_USER.userId, function () {
            return _this.createId('reward');
          });
          _this.honorManager = new HonorManager(_this.saveData.honorState);
          _this.creativeManager = new CreativeWorkshopManager((_this$saveData$creati = _this.saveData.creativeState) != null ? _this$saveData$creati : createInitialCreativeWorkshopState(), _this.pointManager);
          _this.contentRoot = null;
          _this.game = null;
          _this.board = null;
          _this.creativeBoard = null;
          _this.creativeSession = null;
          _this.creativeSessionId = '';
          _this.creativeQuadrantIndex = 0;
          _this.creativePaletteRoot = null;
          _this.creativeStatusLabel = null;
          _this.creativeFooterLabel = null;
          _this.timerLabel = null;
          _this.progressLabel = null;
          _this.trayRoot = null;
          _this.trayStatusLabel = null;
          _this.repairButtonLabel = null;
          _this.currentPattern = null;
          _this.customDraft = null;
          _this.shownStreakMilestone = 0;
          _this.activeLevelId = 'orange-cat-03';
          _this.idSequence = 0;
          return _this;
        }
        var _proto2 = AppController.prototype;
        _proto2.onLoad = function onLoad() {
          var _this2 = this;
          setDisplayStats(false);
          game.on(Game.EVENT_HIDE, this.handleApplicationHidden, this);
          game.on(Game.EVENT_SHOW, this.handleApplicationShown, this);
          this.buildSafeContentRoot();
          this.renderSplash();
          this.scheduleOnce(function () {
            void _this2.initialize();
          }, 0.35);
        };
        _proto2.update = function update() {
          if (this.timerLabel !== null && this.game !== null) {
            this.timerLabel.string = this.scoreCalculator.formatLiveTime(this.game.timer.elapsedMs());
          }
        };
        _proto2.onDestroy = function onDestroy() {
          this.saveCreativeDraft();
          game.off(Game.EVENT_HIDE, this.handleApplicationHidden, this);
          game.off(Game.EVENT_SHOW, this.handleApplicationShown, this);
        };
        _proto2.handleApplicationHidden = function handleApplicationHidden() {
          var _this$game;
          this.saveCreativeDraft();
          (_this$game = this.game) == null || _this$game.timer.onApplicationHidden();
        };
        _proto2.handleApplicationShown = function handleApplicationShown() {
          var _this$game2;
          (_this$game2 = this.game) == null || _this$game2.timer.onApplicationShown();
        };
        _proto2.initialize = /*#__PURE__*/function () {
          var _initialize = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this3 = this,
              _this$saveData,
              _this$saveData$creati2;
            var _iterator, _step, score;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.saveData = this.storage.load();
                  normalizeLevelProgress(this.saveData);
                  this.persist();
                  this.pointManager = new PointManager(this.saveData.pointState, MOCK_USER.userId, function () {
                    return _this3.createId('point');
                  });
                  this.rewardManager = new RewardManager(this.saveData.rewardState, this.pointManager, MOCK_USER.userId, function () {
                    return _this3.createId('reward');
                  });
                  this.honorManager = new HonorManager(this.saveData.honorState);
                  (_this$saveData$creati2 = (_this$saveData = this.saveData).creativeState) != null ? _this$saveData$creati2 : _this$saveData.creativeState = createInitialCreativeWorkshopState();
                  this.creativeManager = new CreativeWorkshopManager(this.saveData.creativeState, this.pointManager);
                  _iterator = _createForOfIteratorHelperLoose(this.saveData.scores);
                case 9:
                  if ((_step = _iterator()).done) {
                    _context.next = 15;
                    break;
                  }
                  score = _step.value;
                  _context.next = 13;
                  return this.rankingService.submit(score);
                case 13:
                  _context.next = 9;
                  break;
                case 15:
                  this.renderHome();
                  if (this.saveData.testerGuideSeen !== true) {
                    this.showTesterGuide();
                  }
                case 17:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function initialize() {
            return _initialize.apply(this, arguments);
          }
          return initialize;
        }();
        _proto2.buildSafeContentRoot = function buildSafeContentRoot() {
          var root = new Node('SafeContent');
          this.node.addChild(root);
          root.addComponent(UITransform).setContentSize(750, 1334);
          root.addComponent(SafeArea);
          this.contentRoot = root;
        };
        _proto2.clearPage = function clearPage() {
          var root = this.requireContentRoot();
          root.removeAllChildren();
          var background = createRect(root, 'Background', 750, 1334, COLORS.cream, Vec3.ZERO, 0);
          background.setSiblingIndex(0);
          this.timerLabel = null;
          this.progressLabel = null;
          this.trayRoot = null;
          this.trayStatusLabel = null;
          this.repairButtonLabel = null;
          this.board = null;
          this.creativeBoard = null;
          this.creativePaletteRoot = null;
          this.creativeStatusLabel = null;
          this.creativeFooterLabel = null;
          return root;
        };
        _proto2.renderSplash = function renderSplash() {
          var root = this.clearPage();
          createLabel(root, '拼豆成真', 72, COLORS.brown, new Vec3(0, 80));
          createLabel(root, 'BEADS COME TRUE', 22, COLORS.orangeDark, new Vec3(0, 10));
          createLabel(root, "\u52A0\u8F7D\u4E2D\u2026  " + APP_VERSION, 24, COLORS.muted, new Vec3(0, -490));
        };
        _proto2.renderHome = function renderHome() {
          var _this4 = this;
          this.game = null;
          var root = this.clearPage();
          createLabel(root, '拼豆成真', 68, COLORS.brown, new Vec3(0, 520));
          createLabel(root, '朋友体验版 · 一颗一颗拼出自己的作品', 25, COLORS.muted, new Vec3(0, 458));
          var profile = createRect(root, 'Profile', 640, 132, COLORS.paper, new Vec3(0, 330));
          createLabel(profile, '🐱  拼豆玩家', 30, COLORS.brown, new Vec3(-120, 20), 340);
          createLabel(profile, this.saveData.pointState.availablePoints + " \u79EF\u5206", 28, COLORS.orangeDark, new Vec3(190, 20), 210);
          createLabel(profile, "\u5B9E\u7269\u5151\u5956\u6D4B\u8BD5\u671F\u5173\u95ED \xB7 \u7075\u611F\u5361 " + this.saveData.honorState.skillInventory.friendshipInsightCards + "/3", 21, COLORS.muted, new Vec3(120, -32), 360);
          createButton(root, '闯关与自定义', new Vec3(0, 190), function () {
            return _this4.renderPatterns();
          }, 560, 92);
          createButton(root, '好友排行榜', new Vec3(0, 80), function () {
            return void _this4.renderRanking('friends', false);
          }, 560, 92, COLORS.paper);
          createButton(root, '创意工坊', new Vec3(0, -30), function () {
            return _this4.startCreativeWorkshop();
          }, 560, 92, COLORS.mint);
          createButton(root, '积分与实物', new Vec3(0, -140), function () {
            return _this4.renderStore();
          }, 560, 92);
          createButton(root, '作品与荣誉墙', new Vec3(0, -250), function () {
            return _this4.renderHonors();
          }, 560, 92, COLORS.paper);
          createButton(root, '设置与测试说明', new Vec3(0, -360), function () {
            return _this4.renderSettings();
          }, 560, 92, COLORS.paper);
        };
        _proto2.renderPatterns = function renderPatterns() {
          var _this5 = this;
          var root = this.clearPage();
          this.renderHeader('选择模式', function () {
            return _this5.renderHome();
          });
          var official = createRect(root, 'OfficialPatterns', 630, 510, COLORS.paper, new Vec3(0, 190), 36);
          this.drawCatPreview(official, new Vec3(-190, 85), 13);
          createLabel(official, '官方闯关 · 每关不同图案', 36, COLORS.brown, new Vec3(80, 145), 400);
          createLabel(official, "\u7231\u5FC3 \u2192 \u70ED\u6C14\u7403 \u2192 \u6A58\u732B\n3 \u2192 5 \u2192 8\u8272 \xB7 48 \u2192 108 \u2192 321\u9897", 24, COLORS.muted, new Vec3(80, 55), 400, 120);
          createButton(official, '进入官方关卡', new Vec3(0, -155), function () {
            return _this5.renderLevels();
          }, 480, 96);
          var custom = createRect(root, 'CustomPattern', 630, 340, COLORS.paper, new Vec3(0, -295), 36);
          createLabel(custom, '我的图片 · 本地自定义', 35, COLORS.brown, new Vec3(0, 105));
          createLabel(custom, 'PNG/JPEG · 3–8色 · 最大30×30\n原图不上传，自定义模式不产积分', 22, COLORS.muted, new Vec3(0, 35), 560, 100);
          createButton(custom, '选择图片并生成', new Vec3(0, -100), function () {
            return _this5.chooseCustomImage();
          }, 480, 88, COLORS.mint);
        };
        _proto2.startCreativeWorkshop = function startCreativeWorkshop() {
          var draft = this.creativeManager.state.draft;
          this.creativeSession = new CreativeWorkshopSession(draft);
          this.creativeSessionId = this.createId('creative-session');
          this.creativeQuadrantIndex = 0;
          this.renderCreativeStudio();
          if (draft !== undefined) {
            this.showToast('已恢复上次未发布的创作');
          }
        };
        _proto2.renderCreativeStudio = function renderCreativeStudio() {
          var _this$creativeSession,
            _this6 = this;
          var session = (_this$creativeSession = this.creativeSession) != null ? _this$creativeSession : new CreativeWorkshopSession(this.creativeManager.state.draft);
          this.creativeSession = session;
          var root = this.clearPage();
          this.renderHeader('创意工坊', function () {
            _this6.saveCreativeDraft();
            _this6.creativeSession = null;
            _this6.renderHome();
          });
          createButton(root, '作品广场', new Vec3(250, 505), function () {
            _this6.saveCreativeDraft();
            _this6.renderCreativeGallery();
          }, 170, 70, COLORS.paper);
          this.creativeStatusLabel = createLabel(root, '', 24, COLORS.orangeDark, new Vec3(0, 500), 390);
          var boardNode = new Node('CreativeBoard');
          root.addChild(boardNode);
          boardNode.setPosition(0, 180);
          var board = boardNode.addComponent(CreativeBoard);
          board.initialize(session, function () {
            return _this6.refreshCreativeStudio();
          }, function () {
            return _this6.saveCreativeDraft();
          }, this.creativeQuadrantIndex);
          this.creativeBoard = board;
          var quadrantLabels = ['左上', '右上', '左下', '右下'];
          quadrantLabels.forEach(function (label, index) {
            createButton(root, "" + (index === _this6.creativeQuadrantIndex ? '✓ ' : '') + label, new Vec3(-240 + index * 160, -125), function () {
              _this6.creativeQuadrantIndex = index;
              _this6.renderCreativeStudio();
            }, 140, 58, index === _this6.creativeQuadrantIndex ? COLORS.mint : COLORS.paper);
          });
          var paletteRoot = new Node('CreativePalette');
          root.addChild(paletteRoot);
          this.creativePaletteRoot = paletteRoot;
          this.renderCreativePalette();
          createButton(root, session.eraserActive ? '✓ 橡皮' : '橡皮', new Vec3(-280, -390), function () {
            session.selectEraser();
            _this6.saveCreativeDraft();
            _this6.renderCreativeStudio();
          }, 120, 82, session.eraserActive ? COLORS.mint : COLORS.paper);
          createButton(root, '撤销', new Vec3(-140, -390), function () {
            var _this6$creativeBoard;
            if (!((_this6$creativeBoard = _this6.creativeBoard) != null && _this6$creativeBoard.undo())) {
              _this6.showToast('没有可撤销的操作');
            }
          }, 120, 82, COLORS.paper);
          createButton(root, "\u5E7F\u544A+" + CREATIVE_AD_GRANT_COUNT, new Vec3(0, -390), function () {
            return _this6.showCreativeAdChoice();
          }, 120, 82, COLORS.mint);
          createButton(root, "\u5206\u4EAB+" + CREATIVE_SHARE_GRANT_PER_COLOR * CREATIVE_PALETTE.length, new Vec3(140, -390), function () {
            return _this6.showCreativeShareChoice();
          }, 120, 82, COLORS.paper);
          createButton(root, '发布', new Vec3(280, -390), function () {
            return _this6.publishCreativeWork();
          }, 120, 82);
          this.creativeFooterLabel = createLabel(root, '', 18, COLORS.muted, new Vec3(0, -490), 640, 90);
          this.refreshCreativeStudio();
        };
        _proto2.renderCreativePalette = function renderCreativePalette() {
          var _this7 = this;
          var session = this.creativeSession;
          var root = this.creativePaletteRoot;
          if (session === null || root === null) {
            return;
          }
          root.removeAllChildren();
          CREATIVE_PALETTE.forEach(function (paletteColor, index) {
            var color = parseHexColor(paletteColor.hex);
            var selected = !session.eraserActive && session.selectedColorId === paletteColor.id;
            var luminance = color.r * 0.299 + color.g * 0.587 + color.b * 0.114;
            var column = index % 4;
            var row = Math.floor(index / 4);
            var symbol = _this7.colorSymbol(paletteColor.id);
            createButton(root, (selected ? "\u2713 " + symbol : symbol) + " \xD7" + session.colorRemaining(paletteColor.id), new Vec3(-240 + column * 160, -215 - row * 78), function () {
              session.selectColor(paletteColor.id);
              _this7.saveCreativeDraft();
              _this7.renderCreativeStudio();
            }, 140, 68, color, luminance < 145 ? COLORS.white : COLORS.brown);
          });
        };
        _proto2.refreshCreativeStudio = function refreshCreativeStudio() {
          var session = this.creativeSession;
          if (session === null) {
            return;
          }
          if (this.creativeStatusLabel !== null) {
            this.creativeStatusLabel.string = session.width + "\xD7" + session.height + " \xB7 \u533A\u57DF" + (this.creativeQuadrantIndex + 1) + "/4 \xB7 \u5DF2\u7528" + session.beadCount + "\u9897";
          }
          if (this.creativeFooterLabel !== null) {
            this.creativeFooterLabel.string = "\u5269\u4F59" + session.remainingBeadCount + "\u9897 \xB7 \u5E7F\u544A" + session.adPackCount + "\u6B21\u4E0D\u9650\u91CF \xB7 \u5206\u4EAB" + session.sharePackCount + "/" + CREATIVE_MAX_SHARE_PACKS + "\n\u60F3\u7EE7\u7EED\u5C31\u9009\u989C\u8272\u770B\u5E7F\u544A+" + CREATIVE_AD_GRANT_COUNT + "\n\u968F\u65F6\u9000\u51FA\u81EA\u52A8\u4FDD\u5B58 \xB7 " + CREATIVE_MIN_PUBLISH_BEADS + "\u9897\u5373\u53EF\u53D1\u5E03";
          }
          this.renderCreativePalette();
        };
        _proto2.publishCreativeWork = function publishCreativeWork() {
          var session = this.creativeSession;
          if (session === null) {
            return;
          }
          var now = Date.now();
          try {
            var work = this.creativeManager.publish(session, this.localDateKey(new Date(now)), now, this.createId('creative-work'));
            this.persist();
            this.creativeSession = null;
            this.renderCreativeGallery();
            this.showToast(work.title + "\u5DF2\u53D1\u5E03\u5230Mock\u5E7F\u573A");
          } catch (error) {
            this.showToast(this.errorMessage(error));
          }
        };
        _proto2.renderCreativeGallery = function renderCreativeGallery() {
          var _this8 = this,
            _this$creativeManager;
          var root = this.clearPage();
          this.renderHeader('创意作品广场', function () {
            if (_this8.creativeSession === null) {
              _this8.startCreativeWorkshop();
            } else {
              _this8.renderCreativeStudio();
            }
          });
          var today = this.localDateKey(new Date());
          var dailyPoints = (_this$creativeManager = this.creativeManager.state.dailyPointTotals[today]) != null ? _this$creativeManager : 0;
          createLabel(root, "Mock\u70B9\u8D5E \xB7 \u4ECA\u65E5\u521B\u610F\u79EF\u5206 " + dailyPoints + "/20", 25, COLORS.orangeDark, new Vec3(-80, 505), 400);
          createButton(root, '本月榜', new Vec3(255, 505), function () {
            return _this8.renderCreativeLikeRanking();
          }, 150, 68, COLORS.mint);
          var works = this.creativeManager.state.works.slice(0, 3);
          if (works.length === 0) {
            createLabel(root, "\u8FD8\u6CA1\u6709\u4F5C\u54C1\n\u753B\u6EE1\u81F3\u5C11" + CREATIVE_MIN_PUBLISH_BEADS + "\u9897\u8C46\uFF0C\u53D1\u5E03\u7B2C\u4E00\u4EF6\u521B\u610F\u5427", 30, COLORS.muted, new Vec3(0, 120), 580, 140);
          }
          works.forEach(function (work, index) {
            var card = createRect(root, "CreativeWork:" + work.workId, 630, 220, COLORS.paper, new Vec3(0, 340 - index * 245), 28);
            _this8.drawCreativeWorkPreview(card, work, new Vec3(-220, 0), 7);
            createLabel(card, work.title, 28, COLORS.brown, new Vec3(85, 55), 350);
            createLabel(card, work.beadCount + "\u9897 \xB7 \u2665 " + work.likeCount + "\n\u5DF2\u83B7\u5F97 " + work.earnedPoints + "/20 \u79EF\u5206", 21, COLORS.muted, new Vec3(45, -10), 280, 80);
            createButton(card, work.likeCount >= 100 ? work.earnedPoints < 20 ? '领取里程碑' : '已达100赞' : 'Mock +10赞', new Vec3(165, -65), function () {
              return _this8.addCreativeMockLikes(work.workId);
            }, 210, 68, work.likeCount >= 100 ? COLORS.disabled : COLORS.mint);
          });
          createButton(root, '＋ 新创作', new Vec3(0, -500), function () {
            return _this8.startCreativeWorkshop();
          }, 420, 82);
        };
        _proto2.renderCreativeLikeRanking = function renderCreativeLikeRanking() {
          var _this9 = this;
          var root = this.clearPage();
          this.renderHeader('本月创意点赞榜', function () {
            return _this9.renderCreativeGallery();
          });
          var ranking = buildCreativeMonthlyLikeRanking(this.creativeManager.state.works, Date.now());
          createLabel(root, '每账号只取最高赞作品 · 前3为实物候选', 22, COLORS.muted, new Vec3(0, 505), 620);
          ranking.slice(0, 8).forEach(function (entry, index) {
            var _ref2;
            var row = createRect(root, "CreativeRank:" + entry.workId, 630, 82, entry.isLocalPlayer ? COLORS.mint : COLORS.paper, new Vec3(0, 420 - index * 96), 18);
            createLabel(row, entry.rank <= 3 ? (_ref2 = ['🥇', '🥈', '🥉'][entry.rank - 1]) != null ? _ref2 : "" + entry.rank : "" + entry.rank, 25, COLORS.brown, new Vec3(-265, 0), 60);
            createLabel(row, entry.title + " \xB7 " + entry.author, 22, COLORS.brown, new Vec3(-55, 0), 350);
            createLabel(row, (entry.monthlyPrizeCandidate ? '实物候选 · ' : '') + "\u2665 " + entry.likeCount, 22, COLORS.orangeDark, new Vec3(215, 0), 175);
          });
          var localEntry = ranking.find(function (_ref3) {
            var isLocalPlayer = _ref3.isLocalPlayer;
            return isLocalPlayer;
          });
          createLabel(root, localEntry === undefined ? '本月发布作品后，这里会显示你的最高赞名次' : "\u6211\u7684\u672C\u6708\u6700\u9AD8\uFF1A\u7B2C" + localEntry.rank + "\u540D \xB7 " + localEntry.likeCount + "\u8D5E", 21, COLORS.orangeDark, new Vec3(0, -425), 620);
          createLabel(root, '实物需原创审核、去重点赞、反作弊及供应商核价', 18, COLORS.muted, new Vec3(0, -465), 650);
          createButton(root, '返回作品广场', new Vec3(0, -525), function () {
            return _this9.renderCreativeGallery();
          }, 420, 76, COLORS.paper);
        };
        _proto2.addCreativeMockLikes = function addCreativeMockLikes(workId) {
          var now = Date.now();
          try {
            var result = this.creativeManager.addMockLikes(workId, 10, this.localDateKey(new Date(now)), now);
            this.persist();
            this.renderCreativeGallery();
            if (result.awardedPoints > 0) {
              this.showToast("\u70B9\u8D5E\u91CC\u7A0B\u7891 +" + result.awardedPoints + "\u79EF\u5206\uFF0C\u4ECA\u65E5" + result.dailyPointTotal + "/20");
            } else if (result.pendingMilestone !== null) {
              this.showToast('今日创意积分已接近上限，里程碑已保留');
            } else {
              this.showToast("\u4F5C\u54C1\u83B7\u5F97\u70B9\u8D5E\uFF0C\u5F53\u524D" + result.likeCount + "\u8D5E");
            }
          } catch (error) {
            this.showToast(this.errorMessage(error));
          }
        };
        _proto2.showCreativeAdChoice = function showCreativeAdChoice() {
          var _this10 = this;
          var session = this.creativeSession;
          if (session === null) {
            return;
          }
          var rewardedColorId = session.selectedColorId;
          var rewardedSymbol = this.colorSymbol(rewardedColorId);
          var root = this.requireContentRoot();
          var overlay = createRect(root, 'CreativeAdChoice', 680, 560, new Color(91, 64, 52, 245), Vec3.ZERO, 32);
          overlay.addComponent(BlockInputEvents);
          createLabel(overlay, "Mock\u5E7F\u544A \xB7 " + rewardedSymbol + "\u8272 +" + CREATIVE_AD_GRANT_COUNT + "\u9897", 35, COLORS.white, new Vec3(0, 190));
          createLabel(overlay, "\u5B8C\u6574\u64AD\u653E3\u79D2\u540E\uFF0C\u4E3A\u5F53\u524D\u9009\u4E2D\u7684" + rewardedSymbol + "\u8272\u8865\u8C46\n\u53D6\u6D88\u6216\u5931\u8D25\u4E0D\u53D1\u653E\uFF0C\u53EF\u7EE7\u7EED\u91CD\u8BD5", 23, COLORS.mint, new Vec3(0, 115), 560, 100);
          var choose = function choose(result) {
            overlay.destroy();
            void _this10.playCreativeAd(result, rewardedColorId);
          };
          createButton(overlay, '完整播放', new Vec3(0, 20), function () {
            return choose('completed');
          }, 480, 84, COLORS.mint);
          createButton(overlay, '用户取消', new Vec3(0, -85), function () {
            return choose('cancelled');
          }, 480, 84, COLORS.paper);
          createButton(overlay, '播放失败', new Vec3(0, -190), function () {
            return choose('failed');
          }, 480, 84, COLORS.pink);
        };
        _proto2.playCreativeAd = /*#__PURE__*/function () {
          var _playCreativeAd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(result, rewardedColorId) {
            var session, root, overlay, adResult;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  session = this.creativeSession;
                  if (!(session === null)) {
                    _context2.next = 3;
                    break;
                  }
                  return _context2.abrupt("return");
                case 3:
                  root = this.requireContentRoot();
                  overlay = createRect(root, 'CreativeMockAd', 750, 1334, new Color(42, 36, 32, 250), Vec3.ZERO, 0);
                  overlay.addComponent(BlockInputEvents);
                  createLabel(overlay, '模拟激励广告', 48, COLORS.white, new Vec3(0, 120));
                  createLabel(overlay, '播放中… 3秒', 28, COLORS.mint, new Vec3(0, 40));
                  this.mockAdService.setNextResult(result);
                  _context2.next = 11;
                  return this.mockAdService.showRewardedAd();
                case 11:
                  adResult = _context2.sent;
                  overlay.destroy();
                  if (adResult === 'completed' && session.grantAdPack(rewardedColorId)) {
                    this.saveCreativeDraft();
                    this.refreshCreativeStudio();
                    this.showToast(this.colorSymbol(rewardedColorId) + "\u8272\u5DF2\u8865\u5145" + CREATIVE_AD_GRANT_COUNT + "\u9897\u8C46");
                  } else if (adResult === 'cancelled') {
                    this.showToast('广告已取消，未发放拼豆');
                  } else {
                    this.showToast('广告播放失败，未发放拼豆');
                  }
                case 14:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function playCreativeAd(_x, _x2) {
            return _playCreativeAd.apply(this, arguments);
          }
          return playCreativeAd;
        }();
        _proto2.showCreativeShareChoice = function showCreativeShareChoice() {
          var _this11 = this;
          var session = this.creativeSession;
          if (session === null) {
            return;
          }
          if (session.sharePackCount >= CREATIVE_MAX_SHARE_PACKS) {
            this.showToast('这件作品已获得3次好友打开奖励');
            return;
          }
          var invite = this.mockShareService.createCreativeInvite(this.creativeSessionId, MOCK_USER.userId);
          var root = this.requireContentRoot();
          var overlay = createRect(root, 'CreativeShareChoice', 680, 570, new Color(91, 64, 52, 245), Vec3.ZERO, 32);
          overlay.addComponent(BlockInputEvents);
          createLabel(overlay, "\u597D\u53CB\u6253\u5F00\u540E +" + CREATIVE_SHARE_GRANT_PER_COLOR * CREATIVE_PALETTE.length + "\u9897", 35, COLORS.white, new Vec3(0, 200));
          createLabel(overlay, "\u6BCF\u8272\u589E\u52A0" + CREATIVE_SHARE_GRANT_PER_COLOR + "\u9897 \xB7 \u6BCF\u4EF6\u6700\u591A" + CREATIVE_MAX_SHARE_PACKS + "\u540D\u597D\u53CB\n\u70B9\u51FB\u5206\u4EAB\u4E0D\u53D1\u8C46\uFF0C\u5FC5\u987B\u9A8C\u8BC1\u552F\u4E00\u597D\u53CB\u6210\u529F\u6253\u5F00", 22, COLORS.mint, new Vec3(0, 115), 590, 100);
          createLabel(overlay, invite.mockUrl, 16, COLORS.white, new Vec3(0, 25), 590, 70);
          createButton(overlay, '模拟好友成功打开', new Vec3(0, -75), function () {
            overlay.destroy();
            if (session.grantSharePack()) {
              _this11.saveCreativeDraft();
              _this11.refreshCreativeStudio();
              _this11.showToast("\u597D\u53CB\u6253\u5F00\u5DF2\u9A8C\u8BC1\uFF0C\u8865\u5145" + CREATIVE_SHARE_GRANT_PER_COLOR * CREATIVE_PALETTE.length + "\u9897\u8C46");
            }
          }, 500, 84, COLORS.mint);
          createButton(overlay, '取消', new Vec3(0, -185), function () {
            return overlay.destroy();
          }, 500, 76, COLORS.paper);
        };
        _proto2.drawCreativeWorkPreview = function drawCreativeWorkPreview(parent, work, position, scale) {
          var preview = new Node("CreativePreview:" + work.workId);
          parent.addChild(preview);
          preview.setPosition(position);
          var graphics = preview.addComponent(Graphics);
          var actualScale = Math.min(scale, Math.max(2, Math.floor(160 / work.width)));
          var size = work.width * actualScale;
          graphics.fillColor = COLORS.cream;
          graphics.roundRect(-size / 2 - 8, -size / 2 - 8, size + 16, size + 16, 16);
          graphics.fill();
          var _loop = function _loop() {
              var _work$cells$index;
              var colorId = (_work$cells$index = work.cells[index]) != null ? _work$cells$index : 0;
              if (colorId === 0) {
                return 0; // continue
              }

              var paletteColor = CREATIVE_PALETTE.find(function (color) {
                return color.id === colorId;
              });
              if (paletteColor === undefined) {
                return 0; // continue
              }

              var column = index % work.width;
              var row = Math.floor(index / work.width);
              graphics.fillColor = parseHexColor(paletteColor.hex);
              graphics.circle(-size / 2 + column * actualScale + actualScale / 2, size / 2 - row * actualScale - actualScale / 2, actualScale * 0.42);
              graphics.fill();
            },
            _ret;
          for (var index = 0; index < work.cells.length; index += 1) {
            _ret = _loop();
            if (_ret === 0) continue;
          }
        };
        _proto2.renderLevels = function renderLevels() {
          var _this12 = this;
          var root = this.clearPage();
          this.renderHeader('官方图案闯关', function () {
            return _this12.renderPatterns();
          });
          var levels = [['tutorial-heart-01', '第一关 · 爱心教程', '9×9 · 48颗 · 3色 · 新手引导'], ['rainbow-balloon-02', '第二关 · 彩虹热气球', '15×15 · 108颗 · 5色 · 完整图案'], ['orange-cat-03', '第三关 · 橘猫成真', '23×23 · 321颗 · 每批4色 · 返豆1']];
          levels.forEach(function (_ref4, index) {
            var levelId = _ref4[0],
              title = _ref4[1],
              detail = _ref4[2];
            var unlocked = _this12.saveData.unlockedLevelIds.includes(levelId);
            var completed = _this12.saveData.completedLevelIds.includes(levelId);
            var card = createRect(root, "Level:" + levelId, 630, 190, unlocked ? COLORS.paper : COLORS.disabled, new Vec3(0, 330 - index * 235));
            createLabel(card, (completed ? '✓' : unlocked ? "" + (index + 1) : '🔒') + "  " + title, 31, COLORS.brown, new Vec3(0, 35), 560);
            var best = _this12.bestScore(levelId);
            createLabel(card, best === null ? detail : detail + "  \xB7  \u6700\u4F73 " + _this12.scoreCalculator.formatResultTime(best.completionTimeMs), 21, COLORS.muted, new Vec3(0, -32), 560);
            if (unlocked) {
              card.on(Node.EventType.TOUCH_END, function () {
                void _this12.startLevel(levelId);
              });
            }
          });
          createLabel(root, '完成前一关即可解锁下一关', 23, COLORS.muted, new Vec3(0, -450));
        };
        _proto2.chooseCustomImage = function chooseCustomImage() {
          var _this13 = this;
          if (typeof document === 'undefined') {
            this.showToast('当前平台暂不支持本地选图');
            return;
          }
          var root = this.requireContentRoot();
          var overlay = createRect(root, 'CustomSizeChoice', 650, 560, new Color(91, 64, 52, 248), Vec3.ZERO, 32);
          overlay.addComponent(BlockInputEvents);
          createLabel(overlay, '选择图案精度', 38, COLORS.white, new Vec3(0, 205));
          createLabel(overlay, '统一按最多8色生成\n23×23以内可显示Mock报价', 23, COLORS.mint, new Vec3(0, 135), 560, 100);
          var choose = function choose(size) {
            overlay.destroy();
            _this13.openCustomFilePicker(size);
          };
          createButton(overlay, '20×20 · 轻量', new Vec3(0, 40), function () {
            return choose(20);
          }, 480, 80, COLORS.paper);
          createButton(overlay, '23×23 · 60mm推荐', new Vec3(0, -60), function () {
            return choose(23);
          }, 480, 80, COLORS.mint);
          createButton(overlay, '30×30 · 仅试玩', new Vec3(0, -160), function () {
            return choose(30);
          }, 480, 80, COLORS.paper);
        };
        _proto2.openCustomFilePicker = function openCustomFilePicker(gridSize) {
          var _this14 = this;
          var input = document.createElement('input');
          input.type = 'file';
          input.accept = 'image/png,image/jpeg';
          input.style.display = 'none';
          document.body.appendChild(input);
          input.addEventListener('change', function () {
            var _input$files;
            var file = (_input$files = input.files) == null ? void 0 : _input$files[0];
            input.remove();
            if (file === undefined) {
              return;
            }
            if (file.size > 10 * 1024 * 1024) {
              _this14.showToast('图片不能超过10MB');
              return;
            }
            var url = URL.createObjectURL(file);
            var image = new Image();
            image.onload = function () {
              try {
                var canvas = document.createElement('canvas');
                canvas.width = gridSize;
                canvas.height = gridSize;
                var context = canvas.getContext('2d', {
                  willReadFrequently: true
                });
                if (context === null) {
                  throw new Error('浏览器无法创建图像处理画布');
                }
                var side = Math.min(image.naturalWidth, image.naturalHeight);
                var sourceX = (image.naturalWidth - side) / 2;
                var sourceY = (image.naturalHeight - side) / 2;
                context.clearRect(0, 0, gridSize, gridSize);
                context.drawImage(image, sourceX, sourceY, side, side, 0, 0, gridSize, gridSize);
                var pixels = context.getImageData(0, 0, gridSize, gridSize);
                _this14.customDraft = buildCustomPattern({
                  width: gridSize,
                  height: gridSize,
                  rgba: pixels.data
                }, 8);
                _this14.renderCustomSummary();
              } catch (error) {
                _this14.showToast("\u751F\u6210\u5931\u8D25\uFF1A" + _this14.errorMessage(error));
              } finally {
                URL.revokeObjectURL(url);
              }
            };
            image.onerror = function () {
              URL.revokeObjectURL(url);
              _this14.showToast('图片读取失败，请换一张PNG或JPEG');
            };
            image.src = url;
          }, {
            once: true
          });
          input.click();
        };
        _proto2.renderCustomSummary = function renderCustomSummary() {
          var _this15 = this;
          var draft = this.customDraft;
          if (draft === null) {
            this.renderPatterns();
            return;
          }
          var root = this.clearPage();
          this.renderHeader('自定义图案预览', function () {
            return _this15.renderPatterns();
          });
          var panel = createRect(root, 'CustomSummary', 640, 690, COLORS.paper, new Vec3(0, 70));
          createLabel(panel, draft.pattern.width + "\xD7" + draft.pattern.height + " \xB7 " + draft.difficulty.colorCount + "\u8272", 42, COLORS.brown, new Vec3(0, 255));
          createLabel(panel, draft.difficulty.beadCount + "\u9897 \xB7 " + draft.difficulty.difficultyLabel + " " + draft.difficulty.difficultyScore + "\u5206", 29, COLORS.orangeDark, new Vec3(0, 185));
          createLabel(panel, "\u9884\u8BA1 " + Math.ceil(draft.difficulty.estimatedDurationSeconds / 60) + "\u5206\u949F\n\u76F8\u8FD1\u8272 " + draft.difficulty.similarColorPairCount + " \u5BF9 \xB7 \u7A00\u6709\u8272 " + draft.difficulty.rareColorCount + " \u79CD", 24, COLORS.muted, new Vec3(0, 95), 560, 120);
          createLabel(panel, draft.quote.purchasable ? "Mock\u5C55\u793A\u4EF7 \xA5" + draft.quote.displayPriceYuan + "\n\u6700\u4F4E \xA5" + draft.quote.minimumPriceYuan + " \xB7 \u6210\u672C72+90=162\u5143" : '30×30仅试玩 · 暂不提供实体报价', 28, COLORS.orangeDark, new Vec3(0, -45), 560, 120);
          createLabel(panel, draft.quote.note, 20, COLORS.muted, new Vec3(0, -155), 560, 100);
          createButton(panel, '开始拼我的图案', new Vec3(0, -265), function () {
            return _this15.startCustomDraft();
          }, 500, 92, COLORS.mint);
        };
        _proto2.startCustomDraft = function startCustomDraft() {
          var _this16 = this;
          var draft = this.customDraft;
          if (draft === null) {
            this.showToast('请先选择图片');
            return;
          }
          this.activeLevelId = draft.resolvedLevel.config.levelId;
          this.currentPattern = draft.pattern;
          this.game = new GameManager(new LevelSession(draft.resolvedLevel), MOCK_USER, function () {
            return _this16.createId('score');
          });
          this.shownStreakMilestone = 0;
          this.renderGame();
        };
        _proto2.showCustomQuote = function showCustomQuote() {
          var draft = this.customDraft;
          if (draft === null) {
            this.showToast('当前没有自定义报价');
            return;
          }
          var payable = calculateCustomPayablePrice(draft.quote, this.saveData.pointState.availablePoints);
          var root = this.requireContentRoot();
          var overlay = createRect(root, 'CustomQuote', 660, 560, new Color(91, 64, 52, 248), Vec3.ZERO, 32);
          overlay.addComponent(BlockInputEvents);
          createLabel(overlay, '自定义实体Mock报价', 38, COLORS.white, new Vec3(0, 205));
          createLabel(overlay, payable.payableYuan === null ? '该尺寸仅试玩，等待供应商确认' : "\u5C55\u793A\u4EF7 \xA5" + draft.quote.displayPriceYuan + "\n\u4F7F\u7528 " + payable.usedPoints + " \u79EF\u5206\u540E \xA5" + payable.payableYuan, 30, COLORS.mint, new Vec3(0, 90), 560, 130);
          createLabel(overlay, '图纸72元 + 人工90元 = 成本162元\n个人主体原型不提供真实付款', 23, COLORS.white, new Vec3(0, -25), 560, 110);
          createButton(overlay, '我知道了', new Vec3(0, -180), function () {
            return overlay.destroy();
          }, 420, 82, COLORS.paper);
        };
        _proto2.startLevel = /*#__PURE__*/function () {
          var _startLevel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(levelId) {
            var _this17 = this;
            var resolvedLevel;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return this.levelManager.loadLevel(levelId);
                case 3:
                  resolvedLevel = _context3.sent;
                  this.activeLevelId = levelId;
                  this.currentPattern = this.levelManager.getLoadedPattern();
                  this.customDraft = null;
                  this.game = new GameManager(new LevelSession(resolvedLevel), MOCK_USER, function () {
                    return _this17.createId('score');
                  });
                  this.shownStreakMilestone = 0;
                  this.renderGame();
                  _context3.next = 15;
                  break;
                case 12:
                  _context3.prev = 12;
                  _context3.t0 = _context3["catch"](0);
                  this.showToast("\u5173\u5361\u52A0\u8F7D\u5931\u8D25\uFF1A" + this.errorMessage(_context3.t0));
                case 15:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this, [[0, 12]]);
          }));
          function startLevel(_x3) {
            return _startLevel.apply(this, arguments);
          }
          return startLevel;
        }();
        _proto2.renderGame = function renderGame() {
          var _this18 = this;
          var game = this.requireGame();
          var root = this.clearPage();
          this.renderHeader(game.session.level.config.levelName, function () {
            return _this18.renderLevels();
          });
          this.timerLabel = createLabel(root, '0:00.0', 44, COLORS.orangeDark, new Vec3(0, 540), 300);
          this.progressLabel = createLabel(root, '完成度 0%', 23, COLORS.muted, new Vec3(0, 495), 300);
          this.drawTargetPreview(root, new Vec3(0, 395));
          var boardNode = new Node('BeadBoard');
          root.addChild(boardNode);
          boardNode.setPosition(0, -20);
          var board = boardNode.addComponent(BeadBoard);
          board.initialize(game, this.paletteMap(), function () {
            return _this18.updateGameStatus();
          }, function () {
            return void _this18.finishLevel();
          });
          this.board = board;
          if (game.session.level.config.playMode === 'free') {
            var paletteY = -405;
            var colors = game.session.level.config.availableColors;
            var spacing = Math.min(105, 560 / Math.max(1, colors.length));
            colors.forEach(function (colorId, index) {
              var _this18$paletteMap$ge;
              var paletteColor = (_this18$paletteMap$ge = _this18.paletteMap().get(colorId)) != null ? _this18$paletteMap$ge : COLORS.brown;
              createButton(root, "" + colorId, new Vec3((index - (colors.length - 1) / 2) * spacing, paletteY), function () {
                game.selectColor(colorId);
                _this18.showToast("\u5DF2\u9009\u62E9 " + _this18.paletteName(colorId));
              }, 88, 88, paletteColor);
            });
          } else {
            this.trayRoot = new Node('ColorTrays');
            root.addChild(this.trayRoot);
            this.trayStatusLabel = createLabel(root, '', 21, COLORS.brown, new Vec3(0, -480), 650);
          }
          var controlsY = -560;
          createButton(root, game.session.level.config.playMode === 'queue' ? '落豆' : '橡皮', new Vec3(-285, controlsY), function () {
            return game.session.level.config.playMode === 'queue' ? game.selectQueue() : game.selectEraser();
          }, 110, 88, COLORS.paper);
          var repairButton = createButton(root, game.session.level.config.playMode === 'queue' ? "\u8FD4\u8C46" + game.session.repairCount : '撤销', new Vec3(-170, controlsY), function () {
            var _this18$board$undo, _this18$board;
            if (game.session.level.config.playMode === 'queue') {
              if (game.session.repairCount > 0) {
                game.selectEraser();
                _this18.showToast('已选择返豆钳，请点击红色错误豆');
              } else if (game.session.level.config.skillLimit > 0) {
                _this18.showAdChoice('repair');
              } else {
                _this18.showToast('免费返豆钳已用完，可从菜单重新开始');
              }
            } else if (!((_this18$board$undo = (_this18$board = _this18.board) == null ? void 0 : _this18$board.undo()) != null ? _this18$board$undo : false)) {
              _this18.showToast('没有可以撤销的步骤');
            }
          }, 110, 88, COLORS.paper);
          this.repairButtonLabel = repairButton.getComponentInChildren(Label);
          if (game.session.level.config.playMode === 'queue') {
            createButton(root, '撤销', new Vec3(-55, controlsY), function () {
              var _this18$board$undo2, _this18$board2;
              if (!((_this18$board$undo2 = (_this18$board2 = _this18.board) == null ? void 0 : _this18$board2.undo()) != null ? _this18$board$undo2 : false)) {
                _this18.showToast(game.session.hasWrongCells ? '错误豆不能普通撤销，请使用返豆钳' : '没有可以撤销的步骤');
              }
            }, 110, 88, COLORS.paper);
          }
          createButton(root, "\u7075\u611F" + this.saveData.honorState.skillInventory.friendshipInsightCards, new Vec3(60, controlsY), function () {
            return _this18.useFriendshipSkill();
          }, 110, 88, game.session.level.config.levelRole === 'official' ? COLORS.mint : COLORS.disabled);
          createButton(root, game.session.level.config.skillLimit === 0 ? '提示0' : '提示', new Vec3(175, controlsY), function () {
            return _this18.showAdChoice('highlight');
          }, 110, 88, game.session.level.config.skillLimit === 0 ? COLORS.disabled : COLORS.mint);
          createButton(root, '菜单', new Vec3(290, controlsY), function () {
            return _this18.showPauseOverlay();
          }, 110, 88, COLORS.paper);
          createLabel(root, '提示：暂停菜单和普通切后台仍会继续计时', 19, COLORS.muted, new Vec3(0, -620));
          this.updateGameStatus();
        };
        _proto2.updateGameStatus = function updateGameStatus() {
          var _this19 = this;
          var game = this.game;
          if (game === null || this.progressLabel === null) {
            return;
          }
          this.progressLabel.string = "\u5B8C\u6210\u5EA6 " + Math.round(game.session.completionRatio * 100) + "% \xB7 \u9519\u8BEF " + game.session.errorCount + " \xB7 \u6280\u80FD " + game.session.skillUseCount + " \xB7 \u8FDE\u7EED " + game.session.correctStreak;
          if (this.trayStatusLabel !== null) {
            var tray = game.session.traySnapshot;
            this.trayStatusLabel.string = "\u6BCF\u8272\u6570\u91CF\u6709\u9650 \xB7 \u603B\u5269\u4F59 " + tray.remainingCount + " \xB7 " + ("\u514D\u8D39\u8FD4\u8C46 " + tray.repairCount);
            this.renderTrayButtons();
          }
          if (this.repairButtonLabel !== null) {
            this.repairButtonLabel.string = "\u8FD4\u8C46" + game.session.repairCount;
          }
          var milestone = [50, 25, 10].find(function (value) {
            return game.session.correctStreak >= value && _this19.shownStreakMilestone < value;
          });
          if (milestone !== undefined) {
            this.shownStreakMilestone = milestone;
            this.showToast(milestone === 50 ? '豆豆大师！连续正确50颗' : milestone === 25 ? '行云流水！连续正确25颗' : '手感正热！连续正确10颗');
          }
        };
        _proto2.renderTrayButtons = function renderTrayButtons() {
          var _this20 = this;
          var root = this.trayRoot;
          var game = this.game;
          if (root === null || game === null) {
            return;
          }
          root.removeAllChildren();
          var tray = game.session.traySnapshot;
          var spacing = Math.min(145, 580 / Math.max(1, tray.colors.length));
          tray.colors.forEach(function (_ref5, index) {
            var _this20$paletteMap$ge;
            var colorId = _ref5.colorId,
              remainingCount = _ref5.remainingCount;
            var color = (_this20$paletteMap$ge = _this20.paletteMap().get(colorId)) != null ? _this20$paletteMap$ge : COLORS.brown;
            var selected = tray.selectedColorId === colorId;
            var luminance = color.r * 0.299 + color.g * 0.587 + color.b * 0.114;
            createButton(root, "" + (selected ? '✓ ' : '') + _this20.colorSymbol(colorId) + "\n\xD7" + remainingCount, new Vec3((index - (tray.colors.length - 1) / 2) * spacing, -405), function () {
              if (game.selectTrayColor(colorId)) {
                _this20.updateGameStatus();
              }
            }, 130, 92, color, luminance < 145 ? COLORS.white : COLORS.brown);
          });
        };
        _proto2.finishLevel = /*#__PURE__*/function () {
          var _finishLevel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var _friendRanking$find$r, _friendRanking$find;
            var game, previousBest, score, perfect, awardedPoints, friendshipAwarded, pattern, difficulty, isNewBest, unlockedAchievements, friendRanking, localRank, surpassedFriends;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  game = this.requireGame();
                  previousBest = this.bestScore(this.activeLevelId);
                  score = game.createCompletedScore();
                  this.saveData.scores.push(score);
                  if (!game.session.level.config.rankingEnabled) {
                    _context4.next = 7;
                    break;
                  }
                  _context4.next = 7;
                  return this.rankingService.submit(score);
                case 7:
                  perfect = score.errorCount === 0 && score.skillUseCount === 0;
                  awardedPoints = 0;
                  friendshipAwarded = false;
                  if (game.session.level.config.levelRole === 'official') {
                    pattern = this.requireCurrentPattern();
                    difficulty = calculateDifficulty(game.session.level.targetColors, game.session.level.boardWidth, game.session.level.boardHeight, pattern.palette, game.session.level.config.playMode === 'queue');
                    awardedPoints = this.pointManager.awardClear(score.levelId, perfect, this.localDateKey(new Date(score.completedAt)), score.completedAt, calculatePointRewardPolicy(difficulty)).awardedPoints;
                    isNewBest = !score.suspiciousFlag && (previousBest === null || score.completionTimeMs < previousBest.completionTimeMs);
                    friendshipAwarded = this.honorManager.awardPersonalBestSkill(score.levelId, this.localDateKey(new Date(score.completedAt)), isNewBest).awarded;
                  }
                  unlockedAchievements = this.honorManager.recordLevelCompletion(game.session.level.config.levelRole, score.levelId, score);
                  if (game.session.level.config.levelRole !== 'custom' && !this.saveData.completedLevelIds.includes(score.levelId)) {
                    this.saveData.completedLevelIds.push(score.levelId);
                  }
                  if (game.session.level.config.levelRole !== 'custom') {
                    this.unlockNextLevel(score.levelId);
                  }
                  this.persist();
                  if (!game.session.level.config.rankingEnabled) {
                    _context4.next = 21;
                    break;
                  }
                  _context4.next = 18;
                  return this.rankingService.getLevelRanking(score.levelId, 'friends', false);
                case 18:
                  _context4.t0 = _context4.sent;
                  _context4.next = 22;
                  break;
                case 21:
                  _context4.t0 = [];
                case 22:
                  friendRanking = _context4.t0;
                  localRank = (_friendRanking$find$r = (_friendRanking$find = friendRanking.find(function (_ref6) {
                    var userId = _ref6.userId;
                    return userId === MOCK_USER.userId;
                  })) == null ? void 0 : _friendRanking$find.rank) != null ? _friendRanking$find$r : null;
                  surpassedFriends = localRank === null ? 0 : friendRanking.filter(function (_ref7) {
                    var isLocalPlayer = _ref7.isLocalPlayer,
                      rank = _ref7.rank;
                    return !isLocalPlayer && rank > localRank;
                  }).length;
                  this.renderResult(score, previousBest, awardedPoints, localRank, surpassedFriends, friendshipAwarded, unlockedAchievements);
                case 26:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function finishLevel() {
            return _finishLevel.apply(this, arguments);
          }
          return finishLevel;
        }();
        _proto2.renderResult = function renderResult(score, previousBest, awardedPoints, friendRank, surpassedFriends, friendshipAwarded, unlockedAchievements) {
          var _this21 = this;
          var root = this.clearPage();
          createLabel(root, '拼豆完成！', 60, COLORS.brown, new Vec3(0, 520));
          var completedLevel = this.requireGame().session.level;
          var resultPreviewScale = Math.max(6, Math.floor(190 / Math.max(completedLevel.boardWidth, completedLevel.boardHeight)));
          this.drawTargetPreview(root, new Vec3(0, 285), resultPreviewScale, false);
          var panel = createRect(root, 'ResultPanel', 640, 430, COLORS.paper, new Vec3(0, -25));
          createLabel(panel, this.scoreCalculator.formatResultTime(score.completionTimeMs), 58, COLORS.orangeDark, new Vec3(0, 110));
          var delta = previousBest === null ? '首次完成' : score.completionTimeMs < previousBest.completionTimeMs ? "\u6BD4\u5386\u53F2\u6700\u4F73\u5FEB " + this.scoreCalculator.formatResultTime(previousBest.completionTimeMs - score.completionTimeMs) : "\u6BD4\u5386\u53F2\u6700\u4F73\u6162 " + this.scoreCalculator.formatResultTime(score.completionTimeMs - previousBest.completionTimeMs);
          createLabel(panel, delta, 24, COLORS.muted, new Vec3(0, 45));
          createLabel(panel, "\u9519\u8BEF " + score.errorCount + " \u6B21 \xB7 \u6280\u80FD " + score.skillUseCount + " \u6B21", 24, COLORS.brown, new Vec3(0, -20));
          createLabel(panel, friendRank === null ? '好友排名：成绩待校验' : "\u597D\u53CB\u6392\u540D #" + friendRank + " \xB7 \u8D85\u8D8A " + surpassedFriends + " \u4F4D\u597D\u53CB", 23, COLORS.muted, new Vec3(0, -75));
          createLabel(panel, this.requireGame().session.level.config.levelRole === 'official' ? "\u83B7\u5F97 " + awardedPoints + " \u79EF\u5206" + (score.suspiciousFlag ? ' · 成绩待校验' : '') : this.requireGame().session.level.config.levelRole === 'custom' ? '自定义图案不产生积分' : '练习关不产生积分', 27, COLORS.orangeDark, new Vec3(0, -135));
          if (friendshipAwarded) {
            createLabel(root, '刷新个人最佳 · 友情灵感卡 +1', 23, COLORS.mint, new Vec3(0, -245));
          } else if (unlockedAchievements.length > 0) {
            createLabel(root, "\u65B0\u8363\u8A89 " + unlockedAchievements.length + "\u679A", 23, COLORS.mint, new Vec3(0, -245));
          }
          createButton(root, '再次挑战', new Vec3(0, -325), function () {
            return void _this21.startLevel(score.levelId);
          }, 560, 96);
          createButton(root, this.requireGame().session.level.config.levelRole === 'official' ? '分享挑战' : this.requireGame().session.level.config.levelRole === 'custom' ? '查看报价' : '练习完成', new Vec3(0, -430), function () {
            return _this21.requireGame().session.level.config.levelRole === 'official' ? _this21.showShare(score) : _this21.requireGame().session.level.config.levelRole === 'custom' ? _this21.showCustomQuote() : _this21.renderLevels();
          }, 270, 90, COLORS.mint);
          var nextLevel = this.nextLevelId(score.levelId);
          createButton(root, nextLevel === null ? '返回关卡' : '下一关', new Vec3(0, -535), function () {
            return nextLevel === null ? _this21.renderLevels() : void _this21.startLevel(nextLevel);
          }, 270, 90, COLORS.paper);
        };
        _proto2.renderRanking = /*#__PURE__*/function () {
          var _renderRanking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(scope, noSkillOnly) {
            var _this22 = this,
              _mine$rank;
            var root, ranking, mine;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  root = this.clearPage();
                  this.renderHeader('排行榜', function () {
                    return _this22.renderHome();
                  });
                  createButton(root, '永久榜', new Vec3(-220, 480), function () {
                    return void _this22.renderRanking('friends', false);
                  }, 180, 76, scope === 'friends' && !noSkillOnly ? COLORS.orange : COLORS.paper);
                  createButton(root, '本周榜', new Vec3(0, 480), function () {
                    return void _this22.renderRanking('weekly-friends', false);
                  }, 180, 76, scope === 'weekly-friends' && !noSkillOnly ? COLORS.orange : COLORS.paper);
                  createButton(root, '纯手工榜', new Vec3(220, 480), function () {
                    return void _this22.renderRanking(scope, true);
                  }, 180, 76, noSkillOnly ? COLORS.mint : COLORS.paper);
                  _context5.next = 7;
                  return this.rankingService.getLevelRanking(this.activeLevelId, scope, noSkillOnly);
                case 7:
                  ranking = _context5.sent;
                  this.renderRankingRows(root, ranking.slice(0, 8));
                  mine = ranking.find(function (_ref8) {
                    var userId = _ref8.userId;
                    return userId === MOCK_USER.userId;
                  });
                  createLabel(root, mine === undefined ? '完成当前关卡后显示我的排名' : "\u6211\u7684\u6392\u540D #" + ((_mine$rank = mine.rank) != null ? _mine$rank : '-') + " \xB7 " + this.scoreCalculator.formatResultTime(mine.completionTimeMs), 24, COLORS.orangeDark, new Vec3(0, -495));
                  createLabel(root, '整套榜：完成正式6关后开放', 21, COLORS.muted, new Vec3(0, -550));
                case 12:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function renderRanking(_x4, _x5) {
            return _renderRanking.apply(this, arguments);
          }
          return renderRanking;
        }();
        _proto2.renderRankingRows = function renderRankingRows(root, ranking) {
          var _this23 = this;
          ranking.forEach(function (entry, index) {
            var _entry$rank;
            var row = createRect(root, "Rank:" + entry.userId, 630, 82, entry.isLocalPlayer ? new Color(255, 229, 189, 255) : COLORS.paper, new Vec3(0, 365 - index * 94), 18);
            createLabel(row, "#" + ((_entry$rank = entry.rank) != null ? _entry$rank : index + 1), 23, COLORS.brown, new Vec3(-250, 0), 80);
            createLabel(row, entry.nickname, 22, COLORS.brown, new Vec3(-80, 0), 230);
            createLabel(row, _this23.scoreCalculator.formatResultTime(entry.completionTimeMs), 22, COLORS.orangeDark, new Vec3(155, 0), 180);
            createLabel(row, "\u6280" + entry.skillUseCount + " \u9519" + entry.errorCount, 18, COLORS.muted, new Vec3(270, 0), 90);
          });
        };
        _proto2.renderStore = function renderStore() {
          var _this24 = this;
          var root = this.clearPage();
          this.renderHeader('积分与实物', function () {
            return _this24.renderHome();
          });
          createLabel(root, "\u53EF\u7528\u79EF\u5206 " + this.saveData.pointState.availablePoints, 36, COLORS.orangeDark, new Vec3(0, 480));
          var blueprint = createRect(root, 'Blueprint', 630, 260, COLORS.paper, new Vec3(0, 260));
          createLabel(blueprint, '像素橘猫数字图纸', 32, COLORS.brown, new Vec3(0, 65));
          createLabel(blueprint, '100积分 · Mock数字商品', 22, COLORS.muted, new Vec3(0, 10));
          var purchased = this.saveData.rewardState.purchasedRewardIds.includes('orange-cat-blueprint');
          createButton(blueprint, purchased ? '已兑换' : '兑换图纸', new Vec3(0, -75), function () {
            return _this24.purchaseBlueprint();
          }, 360, 80, purchased ? COLORS.disabled : COLORS.mint);
          var keychain = createRect(root, 'Keychain', 630, 330, COLORS.paper, new Vec3(0, -100));
          this.drawCatPreview(keychain, new Vec3(-180, 25), 8);
          createLabel(keychain, '橘猫拼豆钥匙扣', 31, COLORS.brown, new Vec3(115, 70), 330);
          createLabel(keychain, '测试期只累计积分 · 实物兑奖尚未开放', 21, COLORS.muted, new Vec3(115, 15), 340);
          createButton(keychain, '盈利验证后开放', new Vec3(115, -80), function () {
            return _this24.showToast('连续盈利验证通过后才开放实物抽奖');
          }, 300, 82, COLORS.disabled);
          createLabel(root, "\u79EF\u5206\u5F53\u524D\u7528\u4E8E\u6210\u957F\u548C\u6570\u5B57\u5546\u54C1 \xB7 \u672A\u6765\u53C2\u8003 " + PHYSICAL_STANDARD_REFERENCE_POINTS + "\u79EF\u5206", 21, COLORS.muted, new Vec3(0, -390));
        };
        _proto2.purchaseBlueprint = function purchaseBlueprint() {
          var rewardId = 'orange-cat-blueprint';
          if (this.saveData.rewardState.purchasedRewardIds.includes(rewardId)) {
            this.showToast('数字图纸已经兑换');
            return;
          }
          try {
            this.pointManager.purchase(100, rewardId, Date.now());
            this.saveData.rewardState.purchasedRewardIds.push(rewardId);
            this.persist();
            this.renderStore();
          } catch (error) {
            this.showToast(this.errorMessage(error));
          }
        };
        _proto2.renderRedemption = function renderRedemption() {
          var _this25 = this;
          var root = this.clearPage();
          this.renderHeader('实物兑奖演示', function () {
            return _this25.renderStore();
          });
          createLabel(root, '橘猫拼豆钥匙扣 · 盈利验证后开放', 34, COLORS.brown, new Vec3(0, 450));
          var form = createRect(root, 'MockForm', 630, 430, COLORS.paper, new Vec3(0, 135));
          createLabel(form, '收件人：演示用户', 25, COLORS.brown, new Vec3(0, 120));
          createLabel(form, '手机号：138****0000', 25, COLORS.brown, new Vec3(0, 55));
          createLabel(form, '地区：演示地区', 25, COLORS.brown, new Vec3(0, -10));
          createLabel(form, '地址：仅用于原型展示，不是真实地址', 23, COLORS.brown, new Vec3(0, -75));
          createLabel(form, "\u53EF\u7528 " + this.saveData.pointState.availablePoints + " \xB7 \u51BB\u7ED3 " + this.saveData.pointState.frozenPoints, 23, COLORS.orangeDark, new Vec3(0, -145));
          var latest = this.latestKeychainRedemption();
          if (latest === null || latest.status === 'rejected') {
            createButton(root, '提交模拟兑换', new Vec3(0, -180), function () {
              return _this25.submitRedemption();
            });
          } else {
            createLabel(root, "\u5F53\u524D\u72B6\u6001\uFF1A" + this.redemptionStatusText(latest), 30, COLORS.orangeDark, new Vec3(0, -170));
            if (latest.status === 'pending') {
              createButton(root, '模拟审核通过', new Vec3(0, -285), function () {
                return _this25.reviewRedemption(latest, true);
              }, 270, 88, COLORS.mint);
              createButton(root, '模拟审核拒绝', new Vec3(0, -395), function () {
                return _this25.reviewRedemption(latest, false);
              }, 270, 88, COLORS.pink);
            }
          }
          createLabel(root, '正式上线前必须增加隐私协议、加密、权限和物流管理', 20, COLORS.muted, new Vec3(0, -520));
        };
        _proto2.submitRedemption = function submitRedemption() {
          try {
            this.rewardManager.submitKeychainRedemption(this.createId('redeem-request'), Date.now());
            this.persist();
            this.renderRedemption();
          } catch (error) {
            this.showToast(this.errorMessage(error));
          }
        };
        _proto2.reviewRedemption = function reviewRedemption(record, approve) {
          try {
            if (approve) {
              this.rewardManager.approve(record.redemptionId, Date.now());
            } else {
              this.rewardManager.reject(record.redemptionId, Date.now());
            }
            this.persist();
            this.renderRedemption();
          } catch (error) {
            this.showToast(this.errorMessage(error));
          }
        };
        _proto2.renderSettings = function renderSettings() {
          var _this26 = this;
          var root = this.clearPage();
          this.renderHeader('设置与测试说明', function () {
            return _this26.renderHome();
          });
          var settings = this.saveData.settings;
          var rows = [['音乐', 'music'], ['音效', 'sound'], ['震动', 'vibration']];
          rows.forEach(function (_ref9, index) {
            var label = _ref9[0],
              key = _ref9[1];
            createButton(root, label + "\uFF1A" + (settings[key] ? '开启' : '关闭'), new Vec3(0, 355 - index * 125), function () {
              settings[key] = !settings[key];
              _this26.persist();
              _this26.renderSettings();
            }, 560, 88, settings[key] ? COLORS.mint : COLORS.disabled);
          });
          createButton(root, '朋友试玩说明', new Vec3(0, -45), function () {
            return _this26.showTesterGuide();
          }, 560, 88, COLORS.paper);
          createButton(root, '复制试玩链接', new Vec3(0, -150), function () {
            return _this26.copyTestLink();
          }, 560, 88, COLORS.mint);
          createButton(root, '清空本机测试进度', new Vec3(0, -255), function () {
            return _this26.showResetConfirmation();
          }, 560, 88, COLORS.pink);
          createButton(root, '隐私说明', new Vec3(0, -360), function () {
            return _this26.showToast('不采集真实个人信息，图片只在本机处理');
          }, 560, 88, COLORS.paper);
          createLabel(root, APP_VERSION + " \xB7 \u6D4B\u8BD5\u6570\u636E\u53EA\u4FDD\u5B58\u5728\u5F53\u524D\u6D4F\u89C8\u5668", 20, COLORS.muted, new Vec3(0, -480), 620);
        };
        _proto2.showTesterGuide = function showTesterGuide() {
          var _this27 = this;
          var root = this.requireContentRoot();
          var overlay = createRect(root, 'TesterGuide', 660, 850, new Color(91, 64, 52, 250), Vec3.ZERO, 34);
          overlay.addComponent(BlockInputEvents);
          createLabel(overlay, '朋友体验版', 46, COLORS.white, new Vec3(0, 335));
          createLabel(overlay, "\u7248\u672C " + APP_VERSION, 22, COLORS.mint, new Vec3(0, 285));
          createLabel(overlay, '① 先完成爱心教程，再挑战完整图案\n\n' + '② 豆盒数量有限，错豆要用返豆钳取回\n\n' + '③ “我的图片”可在本机生成8色拼豆图\n\n' + '④ 创意工坊可以随时退出，下次继续拼', 25, COLORS.white, new Vec3(0, 75), 560, 330);
          createLabel(overlay, '广告、分享、点赞、积分与兑奖均为测试模拟\n' + '不产生真实奖品或兑换权益', 22, COLORS.pink, new Vec3(0, -145), 570, 100);
          createButton(overlay, '复制试玩链接', new Vec3(0, -245), function () {
            return _this27.copyTestLink();
          }, 500, 82, COLORS.mint);
          createButton(overlay, '开始试玩', new Vec3(0, -345), function () {
            _this27.saveData.testerGuideSeen = true;
            _this27.persist();
            overlay.destroy();
          }, 500, 82, COLORS.paper);
        };
        _proto2.copyTestLink = function copyTestLink() {
          var _this28 = this;
          if (typeof window === 'undefined' || typeof document === 'undefined') {
            this.showToast('当前环境暂不支持复制链接');
            return;
          }
          var href = window.top === null || window.top === window ? window.location.href : window.top.location.href;
          var showCopied = function showCopied() {
            return _this28.showToast('试玩链接已复制，可以发给朋友');
          };
          var showFailed = function showFailed() {
            return _this28.showToast('复制失败，请复制浏览器地址栏链接');
          };
          if (typeof navigator !== 'undefined' && navigator.clipboard !== undefined) {
            void navigator.clipboard.writeText(href).then(showCopied, function () {
              if (_this28.copyTextFallback(href)) {
                showCopied();
              } else {
                showFailed();
              }
            });
            return;
          }
          if (this.copyTextFallback(href)) {
            showCopied();
          } else {
            showFailed();
          }
        };
        _proto2.copyTextFallback = function copyTextFallback(text) {
          var input = document.createElement('textarea');
          input.value = text;
          input.setAttribute('readonly', 'true');
          input.style.position = 'fixed';
          input.style.opacity = '0';
          document.body.appendChild(input);
          input.select();
          var copied = document.execCommand('copy');
          input.remove();
          return copied;
        };
        _proto2.showResetConfirmation = function showResetConfirmation() {
          var _this29 = this;
          var root = this.requireContentRoot();
          var overlay = createRect(root, 'ResetConfirmation', 640, 470, new Color(91, 64, 52, 250), Vec3.ZERO, 32);
          overlay.addComponent(BlockInputEvents);
          createLabel(overlay, '清空本机测试进度？', 38, COLORS.white, new Vec3(0, 135));
          createLabel(overlay, '关卡、积分、作品和设置都会恢复初始状态\n此操作无法撤销', 22, COLORS.pink, new Vec3(0, 45), 560, 100);
          createButton(overlay, '取消', new Vec3(-145, -125), function () {
            return overlay.destroy();
          }, 250, 82, COLORS.paper);
          createButton(overlay, '确认清空', new Vec3(145, -125), function () {
            return _this29.resetTestData();
          }, 250, 82, COLORS.pink);
        };
        _proto2.resetTestData = function resetTestData() {
          this.saveData = createDefaultSave();
          this.storage.save(this.saveData);
          if (typeof window !== 'undefined') {
            window.location.reload();
            return;
          }
          void this.initialize();
        };
        _proto2.renderHonors = function renderHonors() {
          var _this30 = this;
          var root = this.clearPage();
          this.renderHeader('作品与荣誉墙', function () {
            return _this30.renderHome();
          });
          createLabel(root, "\u5DF2\u83B7\u5F97 " + this.saveData.honorState.achievementIds.length + "/12 \xB7 \u53CB\u60C5\u7075\u611F " + this.saveData.honorState.skillInventory.friendshipInsightCards + "/3", 27, COLORS.orangeDark, new Vec3(0, 500));
          var honors = [['first-beads', '初识拼豆'], ['queue-apprentice', '豆盒学徒'], ['first-realized', '第一件成真'], ['pure-hand-master', '纯手工大师'], ['streak-50', '连珠巧手'], ['streak-100', '百豆匠人'], ['custom-designer', '自定义设计师'], ['friend-challenger', '好友挑战者'], ['weekly-bronze', '周榜铜章'], ['weekly-silver', '周榜银章'], ['weekly-gold', '周榜金章'], ['realized-collector', '成真收藏家']];
          honors.forEach(function (_ref10, index) {
            var id = _ref10[0],
              title = _ref10[1];
            var unlocked = _this30.honorManager.has(id);
            var column = index % 2;
            var row = Math.floor(index / 2);
            var card = createRect(root, "Honor:" + id, 290, 115, unlocked ? COLORS.paper : COLORS.disabled, new Vec3(column === 0 ? -160 : 160, 390 - row * 135), 22);
            createLabel(card, (unlocked ? '★' : '◇') + " " + title, 23, unlocked ? COLORS.brown : COLORS.muted, Vec3.ZERO, 260);
          });
          createLabel(root, '荣誉只展示成就，不增加兑换积分', 21, COLORS.muted, new Vec3(0, -500));
        };
        _proto2.showAdChoice = function showAdChoice(purpose) {
          var _this31 = this;
          var game = this.game;
          if (game === null) {
            return;
          }
          if (game.session.level.config.skillLimit === 0) {
            this.showToast('练习关不展示广告，可从菜单重新开始');
            return;
          }
          if (game.session.adSkillUseCount >= game.session.level.config.skillLimit) {
            this.showToast('本关广告技能次数已用完');
            return;
          }
          var root = this.requireContentRoot();
          var overlay = createRect(root, 'AdChoice', 680, 560, new Color(91, 64, 52, 245), Vec3.ZERO, 32);
          overlay.addComponent(BlockInputEvents);
          createLabel(overlay, purpose === 'repair' ? 'Mock广告 · 获得返豆钳' : 'Mock广告 · 高亮提示', 34, COLORS.white, new Vec3(0, 190));
          createLabel(overlay, '选择结果后模拟播放3秒\n广告期间暂停计时', 23, new Color(245, 233, 220, 255), new Vec3(0, 115));
          var choose = function choose(result) {
            overlay.destroy();
            void _this31.playMockAd(result, purpose);
          };
          createButton(overlay, '完整播放', new Vec3(0, 20), function () {
            return choose('completed');
          }, 480, 84, COLORS.mint);
          createButton(overlay, '用户取消', new Vec3(0, -85), function () {
            return choose('cancelled');
          }, 480, 84, COLORS.paper);
          createButton(overlay, '播放失败', new Vec3(0, -190), function () {
            return choose('failed');
          }, 480, 84, COLORS.pink);
        };
        _proto2.useFriendshipSkill = function useFriendshipSkill() {
          var _this$board;
          var game = this.game;
          if (game === null || game.session.level.config.levelRole !== 'official') {
            this.showToast('友情灵感只在正式关使用');
            return;
          }
          var grant = useFriendshipInsight(game.session, this.honorManager);
          if (!grant.granted) {
            this.showToast(this.saveData.honorState.skillInventory.friendshipInsightCards <= 0 ? '刷新个人最佳可获得友情灵感卡' : '本局已经使用过友情灵感');
            return;
          }
          (_this$board = this.board) == null || _this$board.highlightMany(grant.highlightedCellIndices, 8);
          this.persist();
          this.updateGameStatus();
          this.showToast('灵感透视：已高亮接下来3颗8秒');
        };
        _proto2.playMockAd = /*#__PURE__*/function () {
          var _playMockAd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(result, purpose) {
            var game, root, overlay, adManager, grant, _grant, _this$board2;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  game = this.requireGame();
                  root = this.requireContentRoot();
                  overlay = createRect(root, 'MockAd', 750, 1334, new Color(42, 36, 32, 250), Vec3.ZERO, 0);
                  overlay.addComponent(BlockInputEvents);
                  createLabel(overlay, '模拟激励广告', 48, COLORS.white, new Vec3(0, 120));
                  createLabel(overlay, '播放中… 3秒', 28, COLORS.mint, new Vec3(0, 40));
                  this.mockAdService.setNextResult(result);
                  _context6.prev = 7;
                  adManager = new AdManager(this.mockAdService, game.timer);
                  if (!(purpose === 'repair')) {
                    _context6.next = 16;
                    break;
                  }
                  _context6.next = 12;
                  return adManager.requestRepairTool(game.session);
                case 12:
                  grant = _context6.sent;
                  if (grant.result === 'completed') {
                    game.selectEraser();
                    this.showToast('已获得1次返豆钳，请点击红色错误豆');
                  } else if (grant.result === 'cancelled') {
                    this.showToast('广告已取消，未发放返豆钳');
                  } else {
                    this.showToast('广告播放失败，未发放返豆钳');
                  }
                  _context6.next = 20;
                  break;
                case 16:
                  _context6.next = 18;
                  return adManager.requestHighlighter(game.session);
                case 18:
                  _grant = _context6.sent;
                  if (_grant.result === 'completed' && _grant.highlightedCellIndex !== null) {
                    (_this$board2 = this.board) == null || _this$board2.highlight(_grant.highlightedCellIndex);
                    this.showToast('已高亮下一颗拼豆5秒');
                  } else if (_grant.result === 'cancelled') {
                    this.showToast('广告已取消，未发放技能');
                  } else {
                    this.showToast('广告播放失败，未发放技能');
                  }
                case 20:
                  this.updateGameStatus();
                  _context6.next = 26;
                  break;
                case 23:
                  _context6.prev = 23;
                  _context6.t0 = _context6["catch"](7);
                  this.showToast(this.errorMessage(_context6.t0));
                case 26:
                  _context6.prev = 26;
                  overlay.destroy();
                  return _context6.finish(26);
                case 29:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this, [[7, 23, 26, 29]]);
          }));
          function playMockAd(_x6, _x7) {
            return _playMockAd.apply(this, arguments);
          }
          return playMockAd;
        }();
        _proto2.showPauseOverlay = function showPauseOverlay() {
          var _this32 = this;
          var root = this.requireContentRoot();
          var overlay = createRect(root, 'PauseOverlay', 650, 470, new Color(91, 64, 52, 245), Vec3.ZERO);
          overlay.addComponent(BlockInputEvents);
          createLabel(overlay, '游戏菜单', 42, COLORS.white, new Vec3(0, 150));
          createLabel(overlay, '计时仍在继续', 25, COLORS.pink, new Vec3(0, 90));
          createButton(overlay, '继续拼豆', new Vec3(0, -20), function () {
            return overlay.destroy();
          }, 420, 84, COLORS.mint);
          createButton(overlay, '重新开始本关', new Vec3(0, -135), function () {
            var _this32$game;
            overlay.destroy();
            if (((_this32$game = _this32.game) == null ? void 0 : _this32$game.session.level.config.levelRole) === 'custom') {
              _this32.startCustomDraft();
            } else {
              void _this32.startLevel(_this32.activeLevelId);
            }
          }, 420, 84, COLORS.paper);
        };
        _proto2.showShare = function showShare(score) {
          var share = this.mockShareService.createChallenge(score.levelId, score.userId, score.completionTimeMs);
          var root = this.requireContentRoot();
          var overlay = createRect(root, 'ShareOverlay', 660, 500, new Color(91, 64, 52, 248), Vec3.ZERO);
          overlay.addComponent(BlockInputEvents);
          createLabel(overlay, "\u6211\u7528" + this.scoreCalculator.formatResultTime(score.completionTimeMs) + "\u5B8C\u6210\u4E86\u6A58\u732B\u62FC\u8C46\n\u4F60\u80FD\u8D85\u8FC7\u6211\u5417\uFF1F", 29, COLORS.white, new Vec3(0, 110), 580, 150);
          createLabel(overlay, share.mockUrl, 17, COLORS.mint, new Vec3(0, -20), 560, 100);
          createButton(overlay, '关闭', new Vec3(0, -150), function () {
            return overlay.destroy();
          }, 360, 82, COLORS.paper);
        };
        _proto2.renderHeader = function renderHeader(title, onBack) {
          var root = this.requireContentRoot();
          createButton(root, '‹ 返回', new Vec3(-275, 590), onBack, 150, 76, COLORS.paper);
          createLabel(root, title, 38, COLORS.brown, new Vec3(0, 590), 430);
        };
        _proto2.drawTargetPreview = function drawTargetPreview(parent, position, scaleOverride, showLabel) {
          if (showLabel === void 0) {
            showLabel = true;
          }
          var game = this.requireGame();
          var pattern = this.requireCurrentPattern();
          var preview = new Node('TargetPreview');
          parent.addChild(preview);
          preview.setPosition(position);
          var graphics = preview.addComponent(Graphics);
          var scale = scaleOverride != null ? scaleOverride : game.session.level.boardWidth <= 9 ? 13 : game.session.level.boardWidth <= 15 ? 9 : 6;
          var width = game.session.level.boardWidth * scale;
          var height = game.session.level.boardHeight * scale;
          graphics.fillColor = COLORS.paper;
          graphics.roundRect(-width / 2 - 18, -height / 2 - 18, width + 36, height + 36, 20);
          graphics.fill();
          var _loop2 = function _loop2() {
            var _game$session$level$t, _palette$hex;
            var colorId = (_game$session$level$t = game.session.level.targetColors[index]) != null ? _game$session$level$t : 0;
            if (colorId === 0) {
              return 1; // continue
            }

            var column = index % game.session.level.boardWidth;
            var row = Math.floor(index / game.session.level.boardWidth);
            var palette = pattern.palette.find(function (_ref11) {
              var id = _ref11.id;
              return id === colorId;
            });
            graphics.fillColor = parseHexColor((_palette$hex = palette == null ? void 0 : palette.hex) != null ? _palette$hex : '#5B4034');
            graphics.circle(-width / 2 + scale / 2 + column * scale, height / 2 - scale / 2 - row * scale, scale * 0.42);
            graphics.fill();
          };
          for (var index = 0; index < game.session.level.targetColors.length; index += 1) {
            if (_loop2()) continue;
          }
          if (showLabel) {
            createLabel(preview, '目标', 18, COLORS.muted, new Vec3(0, -height / 2 - 34), 120, 30);
          }
        };
        _proto2.drawCatPreview = function drawCatPreview(parent, position, scale) {
          var rows = ['001100001100', '011110011110', '011111111110', '011222222110', '012235532210', '012225522210', '012242242210', '001225221100', '000011110000'];
          var preview = new Node('CatPreview');
          parent.addChild(preview);
          preview.setPosition(position);
          var colors = {
            '1': COLORS.brown,
            '2': COLORS.orange,
            '3': new Color(255, 243, 214, 255),
            '4': COLORS.pink,
            '5': new Color(247, 189, 122, 255)
          };
          var width = 12 * scale;
          var height = rows.length * scale;
          preview.addComponent(UITransform).setContentSize(width, height);
          rows.forEach(function (row, y) {
            row.split('').forEach(function (value, x) {
              var _colors$value;
              if (value === '0') {
                return;
              }
              var bead = new Node("PreviewBead:" + x + ":" + y);
              preview.addChild(bead);
              bead.setPosition(-width / 2 + scale / 2 + x * scale, height / 2 - scale / 2 - y * scale);
              bead.addComponent(UITransform).setContentSize(scale, scale);
              var graphics = bead.addComponent(Graphics);
              graphics.fillColor = (_colors$value = colors[value]) != null ? _colors$value : COLORS.brown;
              graphics.circle(0, 0, scale * 0.42);
              graphics.fill();
            });
          });
        };
        _proto2.paletteMap = function paletteMap() {
          return new Map(this.requireCurrentPattern().palette.map(function (_ref12) {
            var id = _ref12.id,
              hex = _ref12.hex;
            return [id, parseHexColor(hex)];
          }));
        };
        _proto2.paletteName = function paletteName(colorId) {
          var _this$requireCurrentP, _this$requireCurrentP2;
          return (_this$requireCurrentP = (_this$requireCurrentP2 = this.requireCurrentPattern().palette.find(function (_ref13) {
            var id = _ref13.id;
            return id === colorId;
          })) == null ? void 0 : _this$requireCurrentP2.name) != null ? _this$requireCurrentP : "\u989C\u8272" + colorId;
        };
        _proto2.colorSymbol = function colorSymbol(colorId) {
          var _symbols;
          var symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
          return (_symbols = symbols[colorId - 1]) != null ? _symbols : String(colorId);
        };
        _proto2.showToast = function showToast(message) {
          var root = this.contentRoot;
          if (root === null || !root.isValid) {
            return;
          }
          var toast = createRect(root, 'Toast', 590, 88, new Color(91, 64, 52, 240), new Vec3(0, 510), 22);
          createLabel(toast, message, 22, COLORS.white, Vec3.ZERO, 540, 70);
          this.scheduleOnce(function () {
            return toast.destroy();
          }, 2);
        };
        _proto2.unlockNextLevel = function unlockNextLevel(levelId) {
          var next = this.nextLevelId(levelId);
          if (next !== null && !this.saveData.unlockedLevelIds.includes(next)) {
            this.saveData.unlockedLevelIds.push(next);
          }
        };
        _proto2.nextLevelId = function nextLevelId(levelId) {
          var _levels;
          var levels = ['tutorial-heart-01', 'rainbow-balloon-02', 'orange-cat-03'];
          var index = levels.indexOf(levelId);
          return index >= 0 && index < levels.length - 1 ? (_levels = levels[index + 1]) != null ? _levels : null : null;
        };
        _proto2.bestScore = function bestScore(levelId) {
          var _candidates$;
          var candidates = this.saveData.scores.filter(function (score) {
            return score.levelId === levelId && !score.suspiciousFlag;
          }).sort(function (left, right) {
            return left.completionTimeMs - right.completionTimeMs || left.skillUseCount - right.skillUseCount || left.errorCount - right.errorCount || left.completedAt - right.completedAt;
          });
          return (_candidates$ = candidates[0]) != null ? _candidates$ : null;
        };
        _proto2.latestKeychainRedemption = function latestKeychainRedemption() {
          var _filter$sort$;
          return (_filter$sort$ = [].concat(this.saveData.rewardState.redemptions).filter(function (_ref14) {
            var rewardId = _ref14.rewardId;
            return rewardId === 'orange-cat-keychain';
          }).sort(function (left, right) {
            return right.createdAt - left.createdAt;
          })[0]) != null ? _filter$sort$ : null;
        };
        _proto2.redemptionStatusText = function redemptionStatusText(record) {
          var labels = {
            pending: '待审核',
            approved: '审核通过',
            rejected: '审核失败，积分已退回',
            preparing: '备货中',
            shipped: '已发货',
            completed: '已完成'
          };
          return labels[record.status];
        };
        _proto2.saveCreativeDraft = function saveCreativeDraft() {
          if (this.creativeSession === null) {
            return;
          }
          this.creativeManager.saveDraft(this.creativeSession, Date.now());
          this.persist();
        };
        _proto2.persist = function persist() {
          this.storage.save(this.saveData);
        };
        _proto2.localDateKey = function localDateKey(date) {
          var year = date.getFullYear();
          var month = String(date.getMonth() + 1).padStart(2, '0');
          var day = String(date.getDate()).padStart(2, '0');
          return year + "-" + month + "-" + day;
        };
        _proto2.createId = function createId(prefix) {
          this.idSequence += 1;
          return prefix + "-" + Date.now() + "-" + this.idSequence;
        };
        _proto2.requireContentRoot = function requireContentRoot() {
          if (this.contentRoot === null) {
            throw new Error('Content root is not ready.');
          }
          return this.contentRoot;
        };
        _proto2.requireGame = function requireGame() {
          if (this.game === null) {
            throw new Error('No game session is active.');
          }
          return this.game;
        };
        _proto2.requireCurrentPattern = function requireCurrentPattern() {
          if (this.currentPattern === null) {
            throw new Error('No pattern is active.');
          }
          return this.currentPattern;
        };
        _proto2.errorMessage = function errorMessage(error) {
          if (error instanceof Error) {
            return error.message;
          }
          if (isRecord(error) && typeof error.message === 'string') {
            return error.message;
          }
          return typeof error === 'string' ? error : '未知错误';
        };
        return AppController;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/bead-board.component.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './level-session.ts', './bead-cell.component.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, _decorator, UITransform, Graphics, Color, Node, Vec3, Component, rasterizeGridLine, BeadCell;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
      Graphics = module.Graphics;
      Color = module.Color;
      Node = module.Node;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      rasterizeGridLine = module.rasterizeGridLine;
    }, function (module) {
      BeadCell = module.BeadCell;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "80c58gXJJVMIJbf8fmbcGAg", "bead-board.component", undefined);
      var ccclass = _decorator.ccclass;
      var BeadBoard = exports('BeadBoard', (_dec = ccclass('BeadBoard'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BeadBoard, _Component);
        function BeadBoard() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.game = null;
          _this.cellSize = 40;
          _this.cells = [];
          _this.activeStroke = false;
          _this.lastIndex = null;
          _this.onChanged = null;
          _this.onCompleted = null;
          return _this;
        }
        var _proto = BeadBoard.prototype;
        _proto.initialize = function initialize(game, palette, onChanged, onCompleted) {
          this.game = game;
          this.onChanged = onChanged;
          this.onCompleted = onCompleted;
          var _game$session$level = game.session.level,
            boardWidth = _game$session$level.boardWidth,
            boardHeight = _game$session$level.boardHeight,
            targetColors = _game$session$level.targetColors;
          this.cellSize = Math.floor(Math.min(570 / boardWidth, 570 / boardHeight));
          var width = boardWidth * this.cellSize;
          var height = boardHeight * this.cellSize;
          this.node.addComponent(UITransform).setContentSize(width, height);
          var background = this.node.addComponent(Graphics);
          background.fillColor = new Color(91, 64, 52, 30);
          background.roundRect(-width / 2 - 12, -height / 2 - 12, width + 24, height + 24, 20);
          background.fill();
          for (var index = 0; index < targetColors.length; index += 1) {
            var _targetColors$index;
            var column = index % boardWidth;
            var row = Math.floor(index / boardWidth);
            var cellNode = new Node("Cell:" + index);
            this.node.addChild(cellNode);
            cellNode.setPosition(-width / 2 + this.cellSize / 2 + column * this.cellSize, height / 2 - this.cellSize / 2 - row * this.cellSize);
            var cell = cellNode.addComponent(BeadCell);
            cell.initialize(this.cellSize, (_targetColors$index = targetColors[index]) != null ? _targetColors$index : 0, palette);
            this.cells.push(cell);
          }
          this.node.on(Node.EventType.TOUCH_START, this.handleBoardStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.handleTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.handleBoardEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.handleTouchEnd, this);
          this.node.on(Node.EventType.MOUSE_DOWN, this.handleBoardStart, this);
          this.node.on(Node.EventType.MOUSE_MOVE, this.handleTouchMove, this);
          this.node.on(Node.EventType.MOUSE_UP, this.handleBoardEnd, this);
        };
        _proto.undo = function undo() {
          var _this$game$session$un, _this$game;
          var changed = (_this$game$session$un = (_this$game = this.game) == null ? void 0 : _this$game.session.undo()) != null ? _this$game$session$un : false;
          if (changed) {
            var _this$onChanged;
            this.renderAll();
            (_this$onChanged = this.onChanged) == null || _this$onChanged.call(this);
          }
          return changed;
        };
        _proto.highlight = function highlight(index, durationSeconds) {
          if (durationSeconds === void 0) {
            durationSeconds = 5;
          }
          var cell = this.cells[index];
          var game = this.game;
          if (cell === undefined || game === null) {
            return;
          }
          cell.setHighlighted(true, game.session.cellValue(index));
          this.scheduleOnce(function () {
            cell.setHighlighted(false, game.session.cellValue(index));
          }, durationSeconds);
        };
        _proto.highlightMany = function highlightMany(indices, durationSeconds) {
          for (var _iterator = _createForOfIteratorHelperLoose(indices), _step; !(_step = _iterator()).done;) {
            var index = _step.value;
            this.highlight(index, durationSeconds);
          }
        };
        _proto.handleCellStart = function handleCellStart(index) {
          var _this$onChanged2;
          var game = this.game;
          if (game === null || this.activeStroke) {
            return;
          }
          game.beginStroke();
          this.activeStroke = true;
          this.lastIndex = index;
          game.extendStroke([index]);
          this.renderAll();
          (_this$onChanged2 = this.onChanged) == null || _this$onChanged2.call(this);
        };
        _proto.handleTouchMove = function handleTouchMove(event) {
          var _this$lastIndex;
          var game = this.game;
          var index = this.indexFromTouch(event);
          if (!this.activeStroke || game === null || index === null) {
            return;
          }
          var previous = (_this$lastIndex = this.lastIndex) != null ? _this$lastIndex : index;
          this.lastIndex = index;
          var indices = rasterizeGridLine(previous, index, game.session.level.boardWidth, game.session.level.boardHeight);
          if (game.extendStroke(indices)) {
            var _this$onChanged3;
            this.renderAll();
            (_this$onChanged3 = this.onChanged) == null || _this$onChanged3.call(this);
          }
        };
        _proto.handleTouchEnd = function handleTouchEnd() {
          var _this$onChanged4;
          var game = this.game;
          if (!this.activeStroke || game === null) {
            return;
          }
          this.activeStroke = false;
          this.lastIndex = null;
          var result = game.endStroke();
          for (var _iterator2 = _createForOfIteratorHelperLoose(result.changes), _step2; !(_step2 = _iterator2()).done;) {
            var _game$session$level$t;
            var change = _step2.value;
            var target = (_game$session$level$t = game.session.level.targetColors[change.index]) != null ? _game$session$level$t : 0;
            if (change.after !== 0 && change.after !== target) {
              var _this$cells$change$in;
              (_this$cells$change$in = this.cells[change.index]) == null || _this$cells$change$in.flashWrong(change.after);
            }
          }
          (_this$onChanged4 = this.onChanged) == null || _this$onChanged4.call(this);
          if (result.completed) {
            var _this$onCompleted;
            (_this$onCompleted = this.onCompleted) == null || _this$onCompleted.call(this);
          }
        };
        _proto.handleBoardStart = function handleBoardStart(event) {
          var index = this.indexFromTouch(event);
          if (index !== null) {
            this.handleCellStart(index);
          }
        };
        _proto.handleBoardEnd = function handleBoardEnd() {
          this.handleTouchEnd();
        };
        _proto.renderAll = function renderAll() {
          var game = this.game;
          if (game === null) {
            return;
          }
          for (var index = 0; index < this.cells.length; index += 1) {
            var _this$cells$index;
            (_this$cells$index = this.cells[index]) == null || _this$cells$index.render(game.session.cellValue(index));
          }
        };
        _proto.indexFromTouch = function indexFromTouch(event) {
          var game = this.game;
          var transform = this.getComponent(UITransform);
          if (game === null || transform === null) {
            return null;
          }
          var location = event.getUILocation();
          var local = transform.convertToNodeSpaceAR(new Vec3(location.x, location.y, 0));
          var width = game.session.level.boardWidth * this.cellSize;
          var height = game.session.level.boardHeight * this.cellSize;
          var column = Math.floor((local.x + width / 2) / this.cellSize);
          var row = Math.floor((height / 2 - local.y) / this.cellSize);
          if (column < 0 || column >= game.session.level.boardWidth || row < 0 || row >= game.session.level.boardHeight) {
            return null;
          }
          return row * game.session.level.boardWidth + column;
        };
        return BeadBoard;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/bead-cell.component.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ui-factory.component.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, UITransform, Graphics, Color, Component, COLORS;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
      Graphics = module.Graphics;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      COLORS = module.COLORS;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "f9a5bEKABJB64pP0qCBhHd+", "bead-cell.component", undefined);
      var ccclass = _decorator.ccclass;
      var BeadCell = exports('BeadCell', (_dec = ccclass('BeadCell'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BeadCell, _Component);
        function BeadCell() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.graphics = null;
          _this.size = 40;
          _this.targetColor = 0;
          _this.palette = new Map();
          _this.highlighted = false;
          _this.wrong = false;
          return _this;
        }
        var _proto = BeadCell.prototype;
        _proto.initialize = function initialize(size, targetColor, palette) {
          this.size = size;
          this.targetColor = targetColor;
          this.palette = new Map(palette);
          this.node.addComponent(UITransform).setContentSize(size - 2, size - 2);
          this.graphics = this.node.addComponent(Graphics);
          this.render(0);
        };
        _proto.render = function render(value) {
          var graphics = this.graphics;
          if (graphics === null) {
            return;
          }
          var half = (this.size - 4) / 2;
          graphics.clear();
          graphics.fillColor = this.targetColor === 0 ? new Color(232, 224, 213, 110) : new Color(255, 253, 247, 255);
          graphics.roundRect(-half, -half, half * 2, half * 2, 7);
          graphics.fill();
          if (this.targetColor > 0 && value === 0) {
            graphics.fillColor = new Color(91, 64, 52, 28);
            graphics.circle(0, 0, this.size * 0.12);
            graphics.fill();
          }
          if (value > 0) {
            var _this$palette$get;
            graphics.fillColor = (_this$palette$get = this.palette.get(value)) != null ? _this$palette$get : COLORS.brown;
            graphics.circle(0, 0, this.size * 0.36);
            graphics.fill();
            graphics.strokeColor = new Color(91, 64, 52, 150);
            graphics.lineWidth = 2;
            graphics.circle(0, 0, this.size * 0.36);
            graphics.stroke();
          }
          if (this.highlighted) {
            graphics.strokeColor = new Color(255, 205, 64, 255);
            graphics.lineWidth = 6;
            graphics.roundRect(-half, -half, half * 2, half * 2, 8);
            graphics.stroke();
          }
          if (this.wrong) {
            graphics.strokeColor = new Color(220, 65, 65, 255);
            graphics.lineWidth = 6;
            graphics.roundRect(-half, -half, half * 2, half * 2, 8);
            graphics.stroke();
          }
        };
        _proto.setHighlighted = function setHighlighted(value, currentValue) {
          this.highlighted = value;
          this.render(currentValue);
        };
        _proto.flashWrong = function flashWrong(currentValue) {
          var _this2 = this;
          this.wrong = true;
          this.render(currentValue);
          this.scheduleOnce(function () {
            _this2.wrong = false;
            _this2.render(currentValue);
          }, 0.3);
        };
        return BeadCell;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/clock.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3b920SGl9hFsog3QPPMknNI", "clock", undefined);
      var SystemClock = exports('SystemClock', /*#__PURE__*/function () {
        function SystemClock() {}
        var _proto = SystemClock.prototype;
        _proto.monotonicMs = function monotonicMs() {
          return performance.now();
        };
        _proto.wallMs = function wallMs() {
          return Date.now();
        };
        return SystemClock;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/contracts.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fc4b14JB3hKdLSFXho0XGO0", "contracts", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/creative-board.component.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './creative-workshop.ts', './level-session.ts', './ui-factory.component.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, UITransform, Graphics, Node, Vec3, Color, Component, CREATIVE_VIEW_SIZE, CREATIVE_PALETTE, rasterizeGridLine, COLORS, parseHexColor;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
      Graphics = module.Graphics;
      Node = module.Node;
      Vec3 = module.Vec3;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      CREATIVE_VIEW_SIZE = module.CREATIVE_VIEW_SIZE;
      CREATIVE_PALETTE = module.CREATIVE_PALETTE;
    }, function (module) {
      rasterizeGridLine = module.rasterizeGridLine;
    }, function (module) {
      COLORS = module.COLORS;
      parseHexColor = module.parseHexColor;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "a6d83DICtRA6arHZbkBus4k", "creative-board.component", undefined);
      var ccclass = _decorator.ccclass;
      var CreativeBoard = exports('CreativeBoard', (_dec = ccclass('CreativeBoard'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CreativeBoard, _Component);
        function CreativeBoard() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.session = null;
          _this.graphics = null;
          _this.cellSize = 23;
          _this.activeStroke = false;
          _this.lastIndex = null;
          _this.onChanged = null;
          _this.onCommitted = null;
          _this.quadrantIndex = 0;
          return _this;
        }
        var _proto = CreativeBoard.prototype;
        _proto.initialize = function initialize(session, onChanged, onCommitted, quadrantIndex) {
          this.session = session;
          this.onChanged = onChanged;
          this.onCommitted = onCommitted;
          this.quadrantIndex = Math.max(0, Math.min(3, quadrantIndex));
          this.cellSize = Math.floor(560 / CREATIVE_VIEW_SIZE);
          var size = CREATIVE_VIEW_SIZE * this.cellSize;
          this.node.addComponent(UITransform).setContentSize(size, size);
          this.graphics = this.node.addComponent(Graphics);
          this.render();
          this.node.on(Node.EventType.TOUCH_START, this.handleStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.handleMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.handleEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.handleEnd, this);
          this.node.on(Node.EventType.MOUSE_DOWN, this.handleStart, this);
          this.node.on(Node.EventType.MOUSE_MOVE, this.handleMove, this);
          this.node.on(Node.EventType.MOUSE_UP, this.handleEnd, this);
        };
        _proto.render = function render() {
          var _this2 = this;
          var session = this.session;
          var graphics = this.graphics;
          if (session === null || graphics === null) {
            return;
          }
          var size = CREATIVE_VIEW_SIZE * this.cellSize;
          var originColumn = this.quadrantIndex % 2 * CREATIVE_VIEW_SIZE;
          var originRow = Math.floor(this.quadrantIndex / 2) * CREATIVE_VIEW_SIZE;
          graphics.clear();
          graphics.fillColor = COLORS.paper;
          graphics.roundRect(-size / 2 - 12, -size / 2 - 12, size + 24, size + 24, 22);
          graphics.fill();
          var _loop = function _loop() {
            var _session$cells$index;
            var column = viewIndex % CREATIVE_VIEW_SIZE;
            var row = Math.floor(viewIndex / CREATIVE_VIEW_SIZE);
            var index = (originRow + row) * session.width + originColumn + column;
            var x = -size / 2 + column * _this2.cellSize;
            var y = size / 2 - (row + 1) * _this2.cellSize;
            graphics.fillColor = new Color(255, 253, 247, 255);
            graphics.roundRect(x + 1, y + 1, _this2.cellSize - 2, _this2.cellSize - 2, 5);
            graphics.fill();
            var colorId = (_session$cells$index = session.cells[index]) != null ? _session$cells$index : 0;
            if (colorId === 0) {
              graphics.fillColor = new Color(91, 64, 52, 28);
              graphics.circle(x + _this2.cellSize / 2, y + _this2.cellSize / 2, _this2.cellSize * 0.08);
              graphics.fill();
            } else {
              var paletteColor = CREATIVE_PALETTE.find(function (color) {
                return color.id === colorId;
              });
              graphics.fillColor = paletteColor === undefined ? COLORS.brown : parseHexColor(paletteColor.hex);
              graphics.circle(x + _this2.cellSize / 2, y + _this2.cellSize / 2, _this2.cellSize * 0.36);
              graphics.fill();
              graphics.strokeColor = new Color(91, 64, 52, 130);
              graphics.lineWidth = 1.5;
              graphics.circle(x + _this2.cellSize / 2, y + _this2.cellSize / 2, _this2.cellSize * 0.36);
              graphics.stroke();
            }
          };
          for (var viewIndex = 0; viewIndex < Math.pow(CREATIVE_VIEW_SIZE, 2); viewIndex += 1) {
            _loop();
          }
        };
        _proto.undo = function undo() {
          var _this$session$undo, _this$session;
          var changed = (_this$session$undo = (_this$session = this.session) == null ? void 0 : _this$session.undo()) != null ? _this$session$undo : false;
          if (changed) {
            var _this$onChanged, _this$onCommitted;
            this.render();
            (_this$onChanged = this.onChanged) == null || _this$onChanged.call(this);
            (_this$onCommitted = this.onCommitted) == null || _this$onCommitted.call(this);
          }
          return changed;
        };
        _proto.handleStart = function handleStart(event) {
          var session = this.session;
          var index = this.indexFromEvent(event);
          if (session === null || index === null || this.activeStroke) {
            return;
          }
          session.beginStroke();
          this.activeStroke = true;
          this.lastIndex = index;
          if (session.extendStroke([index])) {
            var _this$onChanged2;
            this.render();
            (_this$onChanged2 = this.onChanged) == null || _this$onChanged2.call(this);
          }
        };
        _proto.handleMove = function handleMove(event) {
          var _this$lastIndex;
          var session = this.session;
          var index = this.indexFromEvent(event);
          if (!this.activeStroke || session === null || index === null) {
            return;
          }
          var previous = (_this$lastIndex = this.lastIndex) != null ? _this$lastIndex : index;
          this.lastIndex = index;
          var indices = rasterizeGridLine(previous, index, session.width, session.height);
          if (session.extendStroke(indices)) {
            var _this$onChanged3;
            this.render();
            (_this$onChanged3 = this.onChanged) == null || _this$onChanged3.call(this);
          }
        };
        _proto.handleEnd = function handleEnd() {
          var _this$onChanged4;
          var session = this.session;
          if (!this.activeStroke || session === null) {
            return;
          }
          this.activeStroke = false;
          this.lastIndex = null;
          var changed = session.endStroke();
          (_this$onChanged4 = this.onChanged) == null || _this$onChanged4.call(this);
          if (changed) {
            var _this$onCommitted2;
            (_this$onCommitted2 = this.onCommitted) == null || _this$onCommitted2.call(this);
          }
        };
        _proto.indexFromEvent = function indexFromEvent(event) {
          var session = this.session;
          var transform = this.getComponent(UITransform);
          if (session === null || transform === null) {
            return null;
          }
          var location = event.getUILocation();
          var local = transform.convertToNodeSpaceAR(new Vec3(location.x, location.y, 0));
          var size = CREATIVE_VIEW_SIZE * this.cellSize;
          var column = Math.floor((local.x + size / 2) / this.cellSize);
          var row = Math.floor((size / 2 - local.y) / this.cellSize);
          if (column < 0 || column >= CREATIVE_VIEW_SIZE || row < 0 || row >= CREATIVE_VIEW_SIZE) {
            return null;
          }
          var originColumn = this.quadrantIndex % 2 * CREATIVE_VIEW_SIZE;
          var originRow = Math.floor(this.quadrantIndex / 2) * CREATIVE_VIEW_SIZE;
          return (originRow + row) * session.width + originColumn + column;
        };
        return CreativeBoard;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/creative-workshop.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, _createClass, _extends, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        buildCreativeMonthlyLikeRanking: buildCreativeMonthlyLikeRanking,
        createInitialCreativeWorkshopState: createInitialCreativeWorkshopState,
        isCreativeWorkshopState: isCreativeWorkshopState
      });
      cclegacy._RF.push({}, "38b901vm0dL57SnTcp83hG5", "creative-workshop", undefined);
      var CREATIVE_GRID_SIZE = exports('CREATIVE_GRID_SIZE', 52);
      var CREATIVE_VIEW_SIZE = exports('CREATIVE_VIEW_SIZE', 26);
      var CREATIVE_INITIAL_PER_COLOR = exports('CREATIVE_INITIAL_PER_COLOR', 12);
      var CREATIVE_AD_GRANT_COUNT = exports('CREATIVE_AD_GRANT_COUNT', 8);
      var CREATIVE_SHARE_GRANT_PER_COLOR = exports('CREATIVE_SHARE_GRANT_PER_COLOR', 8);
      var CREATIVE_MAX_SHARE_PACKS = exports('CREATIVE_MAX_SHARE_PACKS', 3);
      var CREATIVE_MIN_PUBLISH_BEADS = exports('CREATIVE_MIN_PUBLISH_BEADS', 1);
      var CREATIVE_DAILY_PUBLISH_LIMIT = exports('CREATIVE_DAILY_PUBLISH_LIMIT', 3);
      var CREATIVE_DAILY_POINT_CAP = exports('CREATIVE_DAILY_POINT_CAP', 20);
      var CREATIVE_MONTHLY_PRIZE_COUNT = exports('CREATIVE_MONTHLY_PRIZE_COUNT', 3);
      var CREATIVE_PALETTE = exports('CREATIVE_PALETTE', [{
        id: 1,
        name: '奶油白',
        hex: '#FFF4D6'
      }, {
        id: 2,
        name: '橘子橙',
        hex: '#F79A4A'
      }, {
        id: 3,
        name: '珊瑚红',
        hex: '#EF6A67'
      }, {
        id: 4,
        name: '柠檬黄',
        hex: '#F4D35E'
      }, {
        id: 5,
        name: '薄荷绿',
        hex: '#79C9A7'
      }, {
        id: 6,
        name: '天空蓝',
        hex: '#6DB7E8'
      }, {
        id: 7,
        name: '葡萄紫',
        hex: '#A88BD8'
      }, {
        id: 8,
        name: '深咖啡',
        hex: '#5B4034'
      }]);
      var LIKE_MILESTONES = [{
        likes: 10,
        points: 2
      }, {
        likes: 30,
        points: 3
      }, {
        likes: 60,
        points: 5
      }, {
        likes: 100,
        points: 10
      }];
      function createInitialCreativeWorkshopState() {
        return {
          works: [],
          dailyPublishCounts: {},
          dailyPointTotals: {}
        };
      }
      function isCreativeWorkshopState(value) {
        if (!isRecord(value)) {
          return false;
        }
        return Array.isArray(value.works) && value.works.every(isCreativeWork) && isIntegerRecord(value.dailyPublishCounts) && isIntegerRecord(value.dailyPointTotals) && (value.draft === undefined || isCreativeDraft(value.draft));
      }
      var CreativeWorkshopSession = exports('CreativeWorkshopSession', /*#__PURE__*/function () {
        function CreativeWorkshopSession(draft) {
          this.width = CREATIVE_GRID_SIZE;
          this.height = CREATIVE_GRID_SIZE;
          this.cellsValue = new Array(CREATIVE_GRID_SIZE * CREATIVE_GRID_SIZE).fill(0);
          this.inventoryValue = createInitialInventory();
          this.selectedColorIdValue = 1;
          this.eraserActiveValue = false;
          this.adPackCountValue = 0;
          this.sharePackCountValue = 0;
          this.undoStack = [];
          this.activeBefore = null;
          this.activeChanged = false;
          if (draft === undefined) {
            return;
          }
          this.cellsValue = draft.cells.slice();
          this.inventoryValue = normalizeDraftInventory(this.cellsValue, draft.inventory);
          this.selectedColorIdValue = draft.selectedColorId;
          this.eraserActiveValue = draft.eraserActive;
          this.adPackCountValue = draft.adPackCount;
          this.sharePackCountValue = draft.sharePackCount;
        }
        var _proto = CreativeWorkshopSession.prototype;
        _proto.colorRemaining = function colorRemaining(colorId) {
          var _this$inventoryValue$;
          return (_this$inventoryValue$ = this.inventoryValue[colorId]) != null ? _this$inventoryValue$ : 0;
        };
        _proto.toDraft = function toDraft(updatedAt) {
          return {
            width: CREATIVE_GRID_SIZE,
            height: CREATIVE_GRID_SIZE,
            cells: this.cellsValue.slice(),
            inventory: this.inventoryValue.slice(),
            selectedColorId: this.selectedColorIdValue,
            eraserActive: this.eraserActiveValue,
            adPackCount: this.adPackCountValue,
            sharePackCount: this.sharePackCountValue,
            updatedAt: updatedAt
          };
        };
        _proto.selectColor = function selectColor(colorId) {
          if (!Number.isInteger(colorId) || colorId < 1 || colorId > CREATIVE_PALETTE.length) {
            return false;
          }
          this.selectedColorIdValue = colorId;
          this.eraserActiveValue = false;
          return true;
        };
        _proto.selectEraser = function selectEraser() {
          this.eraserActiveValue = true;
        };
        _proto.beginStroke = function beginStroke() {
          if (this.activeBefore !== null) {
            throw new Error('A creative stroke is already active.');
          }
          this.activeBefore = {
            cells: this.cellsValue.slice(),
            inventory: this.inventoryValue.slice()
          };
          this.activeChanged = false;
        };
        _proto.extendStroke = function extendStroke(indices) {
          if (this.activeBefore === null) {
            throw new Error('No creative stroke is active.');
          }
          var changed = false;
          for (var _iterator = _createForOfIteratorHelperLoose(indices), _step; !(_step = _iterator()).done;) {
            var _this$cellsValue$inde;
            var index = _step.value;
            if (!Number.isInteger(index) || index < 0 || index >= this.cellsValue.length) {
              continue;
            }
            var before = (_this$cellsValue$inde = this.cellsValue[index]) != null ? _this$cellsValue$inde : 0;
            if (this.eraserActiveValue) {
              var _this$inventoryValue$2;
              if (before === 0) {
                continue;
              }
              this.cellsValue[index] = 0;
              this.inventoryValue[before] = ((_this$inventoryValue$2 = this.inventoryValue[before]) != null ? _this$inventoryValue$2 : 0) + 1;
              changed = true;
              continue;
            }
            if (before !== 0 || this.colorRemaining(this.selectedColorIdValue) <= 0) {
              continue;
            }
            this.cellsValue[index] = this.selectedColorIdValue;
            this.inventoryValue[this.selectedColorIdValue] = this.colorRemaining(this.selectedColorIdValue) - 1;
            changed = true;
          }
          this.activeChanged = this.activeChanged || changed;
          return changed;
        };
        _proto.endStroke = function endStroke() {
          var before = this.activeBefore;
          if (before === null) {
            throw new Error('No creative stroke is active.');
          }
          this.activeBefore = null;
          if (this.activeChanged) {
            this.undoStack.push(before);
          }
          var changed = this.activeChanged;
          this.activeChanged = false;
          return changed;
        };
        _proto.undo = function undo() {
          if (this.activeBefore !== null) {
            return false;
          }
          var step = this.undoStack.pop();
          if (step === undefined) {
            return false;
          }
          this.cellsValue = step.cells.slice();
          this.inventoryValue = step.inventory.slice();
          return true;
        };
        _proto.grantAdPack = function grantAdPack(colorId) {
          var _this$inventoryValue$3;
          if (!Number.isInteger(colorId) || colorId < 1 || colorId > CREATIVE_PALETTE.length) {
            return false;
          }
          this.inventoryValue[colorId] = ((_this$inventoryValue$3 = this.inventoryValue[colorId]) != null ? _this$inventoryValue$3 : 0) + CREATIVE_AD_GRANT_COUNT;
          this.adPackCountValue += 1;
          return true;
        };
        _proto.grantSharePack = function grantSharePack() {
          if (this.sharePackCountValue >= CREATIVE_MAX_SHARE_PACKS) {
            return false;
          }
          for (var _i = 0, _CREATIVE_PALETTE = CREATIVE_PALETTE; _i < _CREATIVE_PALETTE.length; _i++) {
            var _this$inventoryValue$4;
            var color = _CREATIVE_PALETTE[_i];
            this.inventoryValue[color.id] = ((_this$inventoryValue$4 = this.inventoryValue[color.id]) != null ? _this$inventoryValue$4 : 0) + CREATIVE_SHARE_GRANT_PER_COLOR;
          }
          this.sharePackCountValue += 1;
          return true;
        };
        _createClass(CreativeWorkshopSession, [{
          key: "cells",
          get: function get() {
            return this.cellsValue;
          }
        }, {
          key: "selectedColorId",
          get: function get() {
            return this.selectedColorIdValue;
          }
        }, {
          key: "eraserActive",
          get: function get() {
            return this.eraserActiveValue;
          }
        }, {
          key: "adPackCount",
          get: function get() {
            return this.adPackCountValue;
          }
        }, {
          key: "sharePackCount",
          get: function get() {
            return this.sharePackCountValue;
          }
        }, {
          key: "beadCount",
          get: function get() {
            return this.cellsValue.reduce(function (total, colorId) {
              return total + (colorId > 0 ? 1 : 0);
            }, 0);
          }
        }, {
          key: "remainingBeadCount",
          get: function get() {
            return this.inventoryValue.reduce(function (total, count) {
              return total + count;
            }, 0);
          }
        }]);
        return CreativeWorkshopSession;
      }());
      var CreativeWorkshopManager = exports('CreativeWorkshopManager', /*#__PURE__*/function () {
        function CreativeWorkshopManager(state, pointManager) {
          this.state = state;
          this.pointManager = pointManager;
        }
        var _proto2 = CreativeWorkshopManager.prototype;
        _proto2.saveDraft = function saveDraft(session, updatedAt) {
          this.state.draft = session.toDraft(updatedAt);
        };
        _proto2.publish = function publish(session, localDateKey, createdAt, workId) {
          var _this$state$dailyPubl;
          if (session.beadCount < CREATIVE_MIN_PUBLISH_BEADS) {
            throw new Error("\u81F3\u5C11\u653E\u7F6E" + CREATIVE_MIN_PUBLISH_BEADS + "\u9897\u8C46\u624D\u80FD\u53D1\u5E03");
          }
          var publishedToday = (_this$state$dailyPubl = this.state.dailyPublishCounts[localDateKey]) != null ? _this$state$dailyPubl : 0;
          if (publishedToday >= CREATIVE_DAILY_PUBLISH_LIMIT) {
            throw new Error("\u4ECA\u5929\u6700\u591A\u53D1\u5E03" + CREATIVE_DAILY_PUBLISH_LIMIT + "\u4EF6\u4F5C\u54C1");
          }
          if (this.state.works.some(function (work) {
            return work.workId === workId;
          })) {
            throw new Error('Creative work IDs must be unique.');
          }
          var work = {
            workId: workId,
            title: "\u6211\u7684\u521B\u4F5C #" + (this.state.works.length + 1),
            width: session.width,
            height: session.height,
            cells: session.cells.slice(),
            beadCount: session.beadCount,
            likeCount: 0,
            earnedPoints: 0,
            claimedLikeMilestones: [],
            createdAt: createdAt
          };
          this.state.works.unshift(work);
          this.state.dailyPublishCounts[localDateKey] = publishedToday + 1;
          delete this.state.draft;
          return work;
        };
        _proto2.addMockLikes = function addMockLikes(workId, count, localDateKey, createdAt) {
          var _this$state$dailyPoin, _LIKE_MILESTONES$find, _LIKE_MILESTONES$find2;
          if (!Number.isInteger(count) || count <= 0) {
            throw new Error('Like count must be a positive integer.');
          }
          var work = this.state.works.find(function (candidate) {
            return candidate.workId === workId;
          });
          if (work === undefined) {
            throw new Error('Creative work was not found.');
          }
          work.likeCount = Math.min(100, work.likeCount + count);
          var awardedPoints = 0;
          var dailyTotal = (_this$state$dailyPoin = this.state.dailyPointTotals[localDateKey]) != null ? _this$state$dailyPoin : 0;
          for (var _i2 = 0, _LIKE_MILESTONES = LIKE_MILESTONES; _i2 < _LIKE_MILESTONES.length; _i2++) {
            var milestone = _LIKE_MILESTONES[_i2];
            if (work.likeCount < milestone.likes || work.claimedLikeMilestones.includes(milestone.likes)) {
              continue;
            }
            if (dailyTotal + milestone.points > CREATIVE_DAILY_POINT_CAP) {
              break;
            }
            work.claimedLikeMilestones.push(milestone.likes);
            work.earnedPoints += milestone.points;
            dailyTotal += milestone.points;
            awardedPoints += milestone.points;
            this.pointManager.awardCreativeLike(milestone.points, work.workId + ":likes-" + milestone.likes, createdAt);
          }
          this.state.dailyPointTotals[localDateKey] = dailyTotal;
          return {
            likeCount: work.likeCount,
            awardedPoints: awardedPoints,
            dailyPointTotal: dailyTotal,
            pendingMilestone: (_LIKE_MILESTONES$find = (_LIKE_MILESTONES$find2 = LIKE_MILESTONES.find(function (milestone) {
              return work.likeCount >= milestone.likes && !work.claimedLikeMilestones.includes(milestone.likes);
            })) == null ? void 0 : _LIKE_MILESTONES$find2.likes) != null ? _LIKE_MILESTONES$find : null
          };
        };
        return CreativeWorkshopManager;
      }());
      function buildCreativeMonthlyLikeRanking(localWorks, timestamp) {
        if (timestamp === void 0) {
          timestamp = Date.now();
        }
        var month = monthRange(timestamp);
        var entries = createMockRankingEntries(month.start, month.end, month.key);
        for (var _iterator2 = _createForOfIteratorHelperLoose(localWorks), _step2; !(_step2 = _iterator2()).done;) {
          var work = _step2.value;
          if (work.createdAt < month.start || work.createdAt >= month.end) {
            continue;
          }
          entries.push({
            workId: work.workId,
            title: work.title,
            author: '我',
            likeCount: work.likeCount,
            beadCount: work.beadCount,
            createdAt: work.createdAt,
            isLocalPlayer: true
          });
        }
        var bestByAuthor = new Map();
        for (var _i3 = 0, _entries = entries; _i3 < _entries.length; _i3++) {
          var entry = _entries[_i3];
          var current = bestByAuthor.get(entry.author);
          if (current === undefined || compareRankingEntries(entry, current) < 0) {
            bestByAuthor.set(entry.author, entry);
          }
        }
        var ranked = Array.from(bestByAuthor.values()).sort(compareRankingEntries);
        return ranked.map(function (entry, index) {
          return _extends({}, entry, {
            rank: index + 1,
            monthlyPrizeCandidate: index < CREATIVE_MONTHLY_PRIZE_COUNT && entry.likeCount >= 100
          });
        });
      }
      function createInitialInventory() {
        var inventory = new Array(CREATIVE_PALETTE.length + 1).fill(0);
        for (var _i4 = 0, _CREATIVE_PALETTE2 = CREATIVE_PALETTE; _i4 < _CREATIVE_PALETTE2.length; _i4++) {
          var color = _CREATIVE_PALETTE2[_i4];
          inventory[color.id] = CREATIVE_INITIAL_PER_COLOR;
        }
        return inventory;
      }
      function normalizeDraftInventory(cells, inventory) {
        var normalized = inventory.slice();
        var placedByColor = new Array(CREATIVE_PALETTE.length + 1).fill(0);
        for (var _iterator3 = _createForOfIteratorHelperLoose(cells), _step3; !(_step3 = _iterator3()).done;) {
          var colorId = _step3.value;
          if (colorId > 0) {
            var _placedByColor$colorI;
            placedByColor[colorId] = ((_placedByColor$colorI = placedByColor[colorId]) != null ? _placedByColor$colorI : 0) + 1;
          }
        }
        for (var _iterator4 = _createForOfIteratorHelperLoose(CREATIVE_PALETTE), _step4; !(_step4 = _iterator4()).done;) {
          var _placedByColor$color$, _normalized$color$id;
          var color = _step4.value;
          var baselineRemaining = Math.max(0, CREATIVE_INITIAL_PER_COLOR - ((_placedByColor$color$ = placedByColor[color.id]) != null ? _placedByColor$color$ : 0));
          normalized[color.id] = Math.max((_normalized$color$id = normalized[color.id]) != null ? _normalized$color$id : 0, baselineRemaining);
        }
        return normalized;
      }
      function isCreativeWork(value) {
        if (!isRecord(value)) {
          return false;
        }
        return typeof value.workId === 'string' && typeof value.title === 'string' && (value.width === 16 || value.width === 24 || value.width === 52) && (value.height === 16 || value.height === 24 || value.height === 52) && value.height === value.width && Array.isArray(value.cells) && value.cells.length === value.width * value.height && value.cells.every(function (cell) {
          return Number.isInteger(cell) && cell >= 0 && cell <= 8;
        }) && typeof value.beadCount === 'number' && Number.isInteger(value.beadCount) && value.beadCount >= 0 && value.beadCount <= value.cells.length && typeof value.likeCount === 'number' && Number.isInteger(value.likeCount) && value.likeCount >= 0 && value.likeCount <= 100 && typeof value.earnedPoints === 'number' && Number.isInteger(value.earnedPoints) && value.earnedPoints >= 0 && value.earnedPoints <= 20 && Array.isArray(value.claimedLikeMilestones) && value.claimedLikeMilestones.every(function (milestone) {
          return Number.isInteger(milestone) && LIKE_MILESTONES.some(function (candidate) {
            return candidate.likes === milestone;
          });
        }) && typeof value.createdAt === 'number' && Number.isInteger(value.createdAt) && value.createdAt >= 0;
      }
      function isCreativeDraft(value) {
        if (!isRecord(value)) {
          return false;
        }
        return value.width === CREATIVE_GRID_SIZE && value.height === CREATIVE_GRID_SIZE && Array.isArray(value.cells) && value.cells.length === CREATIVE_GRID_SIZE * CREATIVE_GRID_SIZE && value.cells.every(function (cell) {
          return Number.isInteger(cell) && cell >= 0 && cell <= 8;
        }) && Array.isArray(value.inventory) && value.inventory.length === CREATIVE_PALETTE.length + 1 && value.inventory.every(function (count) {
          return Number.isSafeInteger(count) && count >= 0;
        }) && value.inventory[0] === 0 && typeof value.selectedColorId === 'number' && Number.isInteger(value.selectedColorId) && value.selectedColorId >= 1 && value.selectedColorId <= CREATIVE_PALETTE.length && typeof value.eraserActive === 'boolean' && typeof value.adPackCount === 'number' && Number.isSafeInteger(value.adPackCount) && value.adPackCount >= 0 && typeof value.sharePackCount === 'number' && Number.isInteger(value.sharePackCount) && value.sharePackCount >= 0 && value.sharePackCount <= CREATIVE_MAX_SHARE_PACKS && typeof value.updatedAt === 'number' && Number.isSafeInteger(value.updatedAt) && value.updatedAt >= 0;
      }
      function createMockRankingEntries(monthStart, monthEnd, monthKey) {
        var titles = ['星星宇航员', '薄荷小恐龙', '橘子汽水', '会飞的鲸鱼', '彩虹机器人', '猫咪面包店', '月亮邮差', '像素花园', '草莓城堡', '海边小屋'];
        var seed = 77031;
        for (var index = 0; index < monthKey.length; index += 1) {
          seed = Math.imul(seed ^ monthKey.charCodeAt(index), 16777619) >>> 0;
        }
        var random = function random() {
          seed = Math.imul(1664525, seed) + 1013904223 >>> 0;
          return seed / 0x100000000;
        };
        var monthSpan = monthEnd - monthStart;
        return Array.from({
          length: 20
        }, function (_, index) {
          var _titles;
          return {
            workId: "mock-creative-" + monthKey + "-" + (index + 1),
            title: (_titles = titles[index % titles.length]) != null ? _titles : "\u521B\u610F\u4F5C\u54C1" + (index + 1),
            author: "\u521B\u4F5C\u8005" + (index + 1),
            likeCount: 35 + Math.floor(random() * 420),
            beadCount: 220 + Math.floor(random() * 1800),
            createdAt: monthStart + Math.floor(monthSpan * (index + 1) / 21),
            isLocalPlayer: false
          };
        });
      }
      function compareRankingEntries(left, right) {
        return right.likeCount - left.likeCount || left.createdAt - right.createdAt || left.workId.localeCompare(right.workId);
      }
      function monthRange(timestamp) {
        var date = new Date(timestamp);
        var year = date.getFullYear();
        var month = date.getMonth();
        return {
          start: new Date(year, month, 1).getTime(),
          end: new Date(year, month + 1, 1).getTime(),
          key: year + "-" + String(month + 1).padStart(2, '0')
        };
      }
      function isIntegerRecord(value) {
        return isRecord(value) && Object.values(value).every(function (entry) {
          return typeof entry === 'number' && Number.isInteger(entry) && entry >= 0;
        });
      }
      function isRecord(value) {
        return typeof value === 'object' && value !== null && !Array.isArray(value);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/custom-pattern.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './difficulty-calculator.ts', './economics.ts', './pattern-loader.ts'], function (exports) {
  var _extends, _createForOfIteratorHelperLoose, cclegacy, calculateDifficulty, quoteCustomPattern, resolveLevel;
  return {
    setters: [function (module) {
      _extends = module.extends;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      calculateDifficulty = module.calculateDifficulty;
    }, function (module) {
      quoteCustomPattern = module.quoteCustomPattern;
    }, function (module) {
      resolveLevel = module.resolveLevel;
    }],
    execute: function () {
      exports('buildCustomPattern', buildCustomPattern);
      cclegacy._RF.push({}, "ae8a8Ankl1Jsp74HhLPm5rA", "custom-pattern", undefined);
      function buildCustomPattern(input, maxColors) {
        if (!Number.isInteger(input.width) || !Number.isInteger(input.height) || input.width < 1 || input.height < 1 || input.width !== input.height || input.width > 30) {
          throw new Error('Custom image must be a square grid up to 30×30.');
        }
        if (input.rgba.length !== input.width * input.height * 4) {
          throw new Error('RGBA data length does not match the image dimensions.');
        }
        if (!Number.isInteger(maxColors) || maxColors < 3 || maxColors > 8) {
          throw new Error('Custom palette size must be between 3 and 8 colors.');
        }
        var buckets = collectBuckets(input.rgba);
        if (buckets.length < 3) {
          throw new Error('Custom images need at least 3 visible colors.');
        }
        var selected = buckets.sort(function (left, right) {
          return right.count - left.count;
        }).slice(0, maxColors);
        var palette = selected.map(function (color, index) {
          return {
            id: index + 1,
            name: "\u989C\u8272" + (index + 1),
            hex: rgbToHex(color)
          };
        });
        var cells = [];
        for (var offset = 0; offset < input.rgba.length; offset += 4) {
          var _input$rgba, _input$rgba$offset, _input$rgba2, _input$rgba3;
          var alpha = (_input$rgba = input.rgba[offset + 3]) != null ? _input$rgba : 0;
          if (alpha < 64) {
            cells.push(0);
            continue;
          }
          cells.push(nearestPaletteId({
            red: (_input$rgba$offset = input.rgba[offset]) != null ? _input$rgba$offset : 0,
            green: (_input$rgba2 = input.rgba[offset + 1]) != null ? _input$rgba2 : 0,
            blue: (_input$rgba3 = input.rgba[offset + 2]) != null ? _input$rgba3 : 0
          }, selected));
        }
        var targetIndices = cells.map(function (colorId, index) {
          return colorId > 0 ? index : -1;
        }).filter(function (index) {
          return index >= 0;
        });
        if (targetIndices.length < 80) {
          throw new Error('Custom images need at least 80 visible beads.');
        }
        if (targetIndices.length > 900) {
          throw new Error('Custom images cannot exceed 900 visible beads.');
        }
        var contentHash = hashCells(cells);
        var pattern = {
          patternId: "custom-" + contentHash,
          setId: "custom-set-" + contentHash,
          name: '我的自定义图案',
          source: 'local-custom',
          contentHash: contentHash,
          width: input.width,
          height: input.height,
          palette: palette,
          cells: cells
        };
        var level = resolveLevel(pattern, {
          levelId: "custom-level-" + contentHash,
          setId: pattern.setId,
          levelName: '我的图案 · 正式拼制',
          patternId: pattern.patternId,
          levelRole: 'custom',
          playMode: 'queue',
          sourceRect: {
            x: 0,
            y: 0,
            width: input.width,
            height: input.height
          },
          targetMode: 'mask',
          targetIndices: targetIndices,
          availableColors: palette.map(function (_ref) {
            var id = _ref.id;
            return id;
          }),
          difficulty: 1,
          expectedDurationSeconds: 1,
          queuePreviewCount: 3,
          queueSeed: Number.parseInt(contentHash.slice(0, 8), 16),
          temporarySlots: 0,
          trayBatchSize: 4,
          initialRepairCount: 3,
          scoreReward: 0,
          perfectScoreReward: 0,
          skillLimit: 0,
          rankingEnabled: false,
          unlockAfterLevelId: null
        });
        var difficulty = calculateDifficulty(level.targetColors, level.boardWidth, level.boardHeight, pattern.palette, true);
        var resolvedLevel = _extends({}, level, {
          config: _extends({}, level.config, {
            difficulty: difficulty.difficultyScore,
            expectedDurationSeconds: difficulty.estimatedDurationSeconds
          })
        });
        return {
          pattern: pattern,
          resolvedLevel: resolvedLevel,
          difficulty: difficulty,
          quote: quoteCustomPattern(input.width, palette.length)
        };
      }
      function collectBuckets(rgba) {
        var byKey = new Map();
        for (var offset = 0; offset < rgba.length; offset += 4) {
          var _rgba, _rgba$offset, _rgba2, _rgba3;
          if (((_rgba = rgba[offset + 3]) != null ? _rgba : 0) < 64) {
            continue;
          }
          var red = (_rgba$offset = rgba[offset]) != null ? _rgba$offset : 0;
          var green = (_rgba2 = rgba[offset + 1]) != null ? _rgba2 : 0;
          var blue = (_rgba3 = rgba[offset + 2]) != null ? _rgba3 : 0;
          var bucketRed = Math.min(255, Math.round(red / 32) * 32);
          var bucketGreen = Math.min(255, Math.round(green / 32) * 32);
          var bucketBlue = Math.min(255, Math.round(blue / 32) * 32);
          var key = bucketRed << 16 | bucketGreen << 8 | bucketBlue;
          var current = byKey.get(key);
          if (current === undefined) {
            byKey.set(key, {
              red: bucketRed,
              green: bucketGreen,
              blue: bucketBlue,
              count: 1
            });
          } else {
            current.count += 1;
          }
        }
        return Array.from(byKey.values());
      }
      function nearestPaletteId(color, palette) {
        var bestIndex = 0;
        var bestDistance = Number.POSITIVE_INFINITY;
        palette.forEach(function (candidate, index) {
          var distance = Math.pow(candidate.red - color.red, 2) + Math.pow(candidate.green - color.green, 2) + Math.pow(candidate.blue - color.blue, 2);
          if (distance < bestDistance) {
            bestDistance = distance;
            bestIndex = index;
          }
        });
        return bestIndex + 1;
      }
      function rgbToHex(color) {
        return "#" + [color.red, color.green, color.blue].map(function (value) {
          return Math.round(value).toString(16).padStart(2, '0');
        }).join('');
      }
      function hashCells(cells) {
        var hash = 0x811c9dc5;
        for (var _iterator = _createForOfIteratorHelperLoose(cells), _step; !(_step = _iterator()).done;) {
          var value = _step.value;
          hash ^= value;
          hash = Math.imul(hash, 0x01000193);
        }
        return (hash >>> 0).toString(16).padStart(8, '0');
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/difficulty-calculator.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        calculateDifficulty: calculateDifficulty,
        calculatePointRewardPolicy: calculatePointRewardPolicy
      });
      cclegacy._RF.push({}, "a4fbbf3yaxOc7ccMla5L1pR", "difficulty-calculator", undefined);
      function calculateDifficulty(targetColors, width, height, palette, queueMode) {
        if (targetColors.length !== width * height) {
          throw new Error('Target colors must match the supplied dimensions.');
        }
        var usage = new Map();
        for (var _iterator = _createForOfIteratorHelperLoose(targetColors), _step; !(_step = _iterator()).done;) {
          var colorId = _step.value;
          if (colorId > 0) {
            var _usage$get;
            usage.set(colorId, ((_usage$get = usage.get(colorId)) != null ? _usage$get : 0) + 1);
          }
        }
        var beadCount = Array.from(usage.values()).reduce(function (total, count) {
          return total + count;
        }, 0);
        if (beadCount === 0) {
          throw new Error('Difficulty cannot be calculated for an empty pattern.');
        }
        var colorCount = usage.size;
        var normalizedColorEntropy = calculateNormalizedEntropy(Array.from(usage.values()), beadCount);
        var transitionCount = countTransitions(targetColors, width, height);
        var similarColorPairCount = countSimilarPairs(usage, palette);
        var rareColorCount = Array.from(usage.values()).filter(function (count) {
          return count / beadCount < 0.03;
        }).length;
        var estimatedDurationSeconds = Math.round(45 + 1.55 * beadCount + 0.3 * transitionCount + 25 * Math.max(colorCount - 3, 0) * normalizedColorEntropy + 18 * similarColorPairCount + 8 * rareColorCount + (queueMode ? 60 : 0));
        var difficultyScore = Math.min(100, Math.round(estimatedDurationSeconds / 12) + 4 * similarColorPairCount);
        return {
          beadCount: beadCount,
          colorCount: colorCount,
          transitionCount: transitionCount,
          normalizedColorEntropy: normalizedColorEntropy,
          similarColorPairCount: similarColorPairCount,
          rareColorCount: rareColorCount,
          estimatedDurationSeconds: estimatedDurationSeconds,
          difficultyScore: difficultyScore,
          difficultyLabel: difficultyLabel(difficultyScore),
          colorUsage: Object.fromEntries(usage)
        };
      }
      function calculatePointRewardPolicy(metrics) {
        var estimatedMinutes = metrics.estimatedDurationSeconds / 60;
        var firstClearPoints = clamp(30, 80, roundToNearest(20 + estimatedMinutes * 3, 5));
        var perfectPoints = roundToNearest(firstClearPoints / 3, 5);
        return {
          firstClearPoints: firstClearPoints,
          perfectPoints: perfectPoints,
          repeatPoints: [Math.round(firstClearPoints * 0.2), Math.round(firstClearPoints * 0.1), Math.round(firstClearPoints * 0.05)],
          dailyRepeatCap: 20
        };
      }
      function calculateNormalizedEntropy(counts, total) {
        if (counts.length <= 1) {
          return 0;
        }
        var entropy = 0;
        for (var _iterator2 = _createForOfIteratorHelperLoose(counts), _step2; !(_step2 = _iterator2()).done;) {
          var count = _step2.value;
          var probability = count / total;
          entropy -= probability * Math.log2(probability);
        }
        return entropy / Math.log2(counts.length);
      }
      function countTransitions(cells, width, height) {
        var transitions = 0;
        for (var row = 0; row < height; row += 1) {
          for (var column = 0; column < width; column += 1) {
            var _cells$index;
            var index = row * width + column;
            var color = (_cells$index = cells[index]) != null ? _cells$index : 0;
            if (color === 0) {
              continue;
            }
            if (column + 1 < width) {
              var _cells;
              var right = (_cells = cells[index + 1]) != null ? _cells : 0;
              if (right > 0 && right !== color) {
                transitions += 1;
              }
            }
            if (row + 1 < height) {
              var _cells2;
              var below = (_cells2 = cells[index + width]) != null ? _cells2 : 0;
              if (below > 0 && below !== color) {
                transitions += 1;
              }
            }
          }
        }
        return transitions;
      }
      function countSimilarPairs(usage, palette) {
        var colors = palette.filter(function (_ref) {
          var id = _ref.id;
          return usage.has(id);
        });
        var similarPairs = 0;
        for (var left = 0; left < colors.length; left += 1) {
          for (var right = left + 1; right < colors.length; right += 1) {
            var leftColor = colors[left];
            var rightColor = colors[right];
            if (leftColor !== undefined && rightColor !== undefined && deltaE76(hexToLab(leftColor.hex), hexToLab(rightColor.hex)) < 12) {
              similarPairs += 1;
            }
          }
        }
        return similarPairs;
      }
      function hexToLab(hex) {
        var _match$, _match$2, _match$3;
        var match = /^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(hex);
        if (match === null) {
          throw new Error("Invalid palette hex color: " + hex + ".");
        }
        var red = Number.parseInt((_match$ = match[1]) != null ? _match$ : '0', 16) / 255;
        var green = Number.parseInt((_match$2 = match[2]) != null ? _match$2 : '0', 16) / 255;
        var blue = Number.parseInt((_match$3 = match[3]) != null ? _match$3 : '0', 16) / 255;
        var linear = function linear(value) {
          return value <= 0.04045 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
        };
        var r = linear(red);
        var g = linear(green);
        var b = linear(blue);
        var x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
        var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
        var z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;
        var pivot = function pivot(value) {
          return value > 0.008856 ? Math.cbrt(value) : 7.787 * value + 16 / 116;
        };
        var fx = pivot(x);
        var fy = pivot(y);
        var fz = pivot(z);
        return {
          l: 116 * fy - 16,
          a: 500 * (fx - fy),
          b: 200 * (fy - fz)
        };
      }
      function deltaE76(left, right) {
        return Math.sqrt(Math.pow(left.l - right.l, 2) + Math.pow(left.a - right.a, 2) + Math.pow(left.b - right.b, 2));
      }
      function difficultyLabel(score) {
        if (score <= 25) {
          return '入门';
        }
        if (score <= 50) {
          return '标准';
        }
        if (score <= 75) {
          return '困难';
        }
        return '专家';
      }
      function roundToNearest(value, step) {
        return Math.round(value / step) * step;
      }
      function clamp(minimum, maximum, value) {
        return Math.min(maximum, Math.max(minimum, value));
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/economics.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        calculateCustomPayablePrice: calculateCustomPayablePrice,
        estimateMonthlyNetAdRevenue: estimateMonthlyNetAdRevenue,
        estimateRewardFunding: estimateRewardFunding,
        projectOfficialInventory: projectOfficialInventory,
        quoteCustomPattern: quoteCustomPattern
      });
      cclegacy._RF.push({}, "4672eopDyBJer/H/csaoENE", "economics", undefined);
      var CUSTOM_PATTERN_FEE_YUAN = exports('CUSTOM_PATTERN_FEE_YUAN', 72);
      var CUSTOM_ASSEMBLY_FEE_YUAN = exports('CUSTOM_ASSEMBLY_FEE_YUAN', 90);
      var OFFICIAL_PATTERN_SETUP_FEE_YUAN = exports('OFFICIAL_PATTERN_SETUP_FEE_YUAN', 72);
      var OFFICIAL_UNIT_COST_YUAN = exports('OFFICIAL_UNIT_COST_YUAN', 90);
      var RISK_RESERVE_RATE = exports('RISK_RESERVE_RATE', 0.1);
      var PHYSICAL_REDEMPTION_POINTS = exports('PHYSICAL_REDEMPTION_POINTS', 500);
      var PHYSICAL_PROMO_STOCK = exports('PHYSICAL_PROMO_STOCK', 0);
      var PHYSICAL_PROMO_STOCK_CAP = exports('PHYSICAL_PROMO_STOCK_CAP', 25);
      var PHYSICAL_STANDARD_REFERENCE_POINTS = exports('PHYSICAL_STANDARD_REFERENCE_POINTS', 3000);
      function estimateRewardFunding(unitCostYuan, grossEcpmYuan, developerShareRate) {
        if (!Number.isFinite(unitCostYuan) || unitCostYuan <= 0 || !Number.isFinite(grossEcpmYuan) || grossEcpmYuan <= 0 || !Number.isFinite(developerShareRate) || developerShareRate <= 0 || developerShareRate > 1) {
          throw new Error('Reward funding inputs must be positive and valid.');
        }
        var netRevenuePerImpressionYuan = grossEcpmYuan * developerShareRate / 1000;
        return {
          netRevenuePerImpressionYuan: Math.round(netRevenuePerImpressionYuan * 1000) / 1000,
          requiredImpressions: Math.ceil(unitCostYuan / netRevenuePerImpressionYuan)
        };
      }
      function quoteCustomPattern(gridSize, colorCount) {
        if (!Number.isInteger(gridSize) || gridSize < 1 || gridSize > 30) {
          throw new Error('Custom grid size must be between 1 and 30.');
        }
        if (!Number.isInteger(colorCount) || colorCount < 3 || colorCount > 8) {
          throw new Error('Custom patterns must use between 3 and 8 colors.');
        }
        var directCostYuan = CUSTOM_PATTERN_FEE_YUAN + CUSTOM_ASSEMBLY_FEE_YUAN;
        var riskReserveYuan = roundCurrency(directCostYuan * RISK_RESERVE_RATE);
        var purchasable = gridSize <= 23;
        return {
          purchasable: purchasable,
          gridSize: gridSize,
          colorCount: colorCount,
          patternFeeYuan: CUSTOM_PATTERN_FEE_YUAN,
          assemblyFeeYuan: CUSTOM_ASSEMBLY_FEE_YUAN,
          directCostYuan: directCostYuan,
          riskReserveYuan: riskReserveYuan,
          displayPriceYuan: purchasable ? 229 : null,
          minimumPriceYuan: purchasable ? 199 : null,
          maximumPointDiscount: purchasable ? 300 : 0,
          note: purchasable ? '8色内暂按不加价估算；真实销售前需供应商书面确认。' : '24–30格仅试玩，供应商确认尺寸与成本后才能报价。'
        };
      }
      function calculateCustomPayablePrice(quote, availablePoints) {
        if (!Number.isInteger(availablePoints) || availablePoints < 0) {
          throw new Error('Available points must be a non-negative integer.');
        }
        if (!quote.purchasable || quote.displayPriceYuan === null || quote.minimumPriceYuan === null) {
          return {
            usedPoints: 0,
            payableYuan: null
          };
        }
        var usedPoints = Math.min(quote.maximumPointDiscount, Math.floor(availablePoints / 10) * 10);
        var discountYuan = usedPoints / 10;
        return {
          usedPoints: usedPoints,
          payableYuan: Math.max(quote.minimumPriceYuan, quote.displayPriceYuan - discountYuan)
        };
      }
      function projectOfficialInventory(settledNetAdRevenueYuan, carryYuan, setupAlreadyPaid) {
        if (!Number.isFinite(settledNetAdRevenueYuan) || settledNetAdRevenueYuan < 0 || !Number.isFinite(carryYuan) || carryYuan < 0) {
          throw new Error('Inventory revenue and carry must be non-negative.');
        }
        var allocatedBudgetYuan = roundCurrency(settledNetAdRevenueYuan * 0.5 + carryYuan);
        var patternSetupBudgetYuan = setupAlreadyPaid ? 0 : roundCurrency(OFFICIAL_PATTERN_SETUP_FEE_YUAN * (1 + RISK_RESERVE_RATE));
        var unitBudgetYuan = roundCurrency(OFFICIAL_UNIT_COST_YUAN * (1 + RISK_RESERVE_RATE));
        var distributable = Math.max(0, allocatedBudgetYuan - patternSetupBudgetYuan);
        var units = Math.floor(distributable / unitBudgetYuan);
        return {
          settledNetAdRevenueYuan: settledNetAdRevenueYuan,
          allocatedBudgetYuan: allocatedBudgetYuan,
          patternSetupBudgetYuan: patternSetupBudgetYuan,
          unitBudgetYuan: unitBudgetYuan,
          units: units,
          carryYuan: roundCurrency(distributable - units * unitBudgetYuan)
        };
      }
      function estimateMonthlyNetAdRevenue(dailyActiveUsers, grossEcpmYuan, developerShareRate, socialSkillSubstitutionRate) {
        if (socialSkillSubstitutionRate === void 0) {
          socialSkillSubstitutionRate = 0.2;
        }
        for (var _i = 0, _arr = [dailyActiveUsers, grossEcpmYuan, developerShareRate, socialSkillSubstitutionRate]; _i < _arr.length; _i++) {
          var value = _arr[_i];
          if (!Number.isFinite(value) || value < 0) {
            throw new Error('Economics inputs must be non-negative.');
          }
        }
        var validImpressions = dailyActiveUsers * 30 * 0.4 * 0.75 * (1 - socialSkillSubstitutionRate);
        return roundCurrency(validImpressions * grossEcpmYuan * developerShareRate / 1000);
      }
      function roundCurrency(value) {
        return Math.round(value * 100) / 100;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/friendship-skill.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('useFriendshipInsight', useFriendshipInsight);
      cclegacy._RF.push({}, "ed6bcULQDhP1JjPQJBbO5Le", "friendship-skill", undefined);
      function useFriendshipInsight(session, honorManager) {
        if (session.friendshipSkillUseCount >= 1 || honorManager.state.skillInventory.friendshipInsightCards <= 0) {
          return {
            granted: false,
            highlightedCellIndices: []
          };
        }
        var highlightedCellIndices = session.nextIncorrectTargetIndices(3);
        if (highlightedCellIndices.length === 0) {
          return {
            granted: false,
            highlightedCellIndices: []
          };
        }
        if (!honorManager.consumeFriendshipInsight() || !session.registerSkillUse('friendship-insight')) {
          throw new Error('Friendship insight state became inconsistent.');
        }
        return {
          granted: true,
          highlightedCellIndices: highlightedCellIndices
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/game-manager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './clock.ts', './stopwatch-timer.ts', './anti-cheat-validator.ts'], function (exports) {
  var _extends, _createClass, cclegacy, SystemClock, StopwatchTimer, AntiCheatValidator;
  return {
    setters: [function (module) {
      _extends = module.extends;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      SystemClock = module.SystemClock;
    }, function (module) {
      StopwatchTimer = module.StopwatchTimer;
    }, function (module) {
      AntiCheatValidator = module.AntiCheatValidator;
    }],
    execute: function () {
      exports('weekKeyForTimestamp', weekKeyForTimestamp);
      cclegacy._RF.push({}, "c0c9f5r9ElADJD/x21921eB", "game-manager", undefined);
      var GameManager = exports('GameManager', /*#__PURE__*/function () {
        function GameManager(levelSession, user, createId, wallMs) {
          if (wallMs === void 0) {
            wallMs = Date.now;
          }
          this.session = void 0;
          this.timer = void 0;
          this.selectedToolValue = void 0;
          this.user = user;
          this.createId = createId;
          this.wallMs = wallMs;
          this.session = levelSession;
          this.timer = new StopwatchTimer(new SystemClock());
          if (levelSession.level.config.playMode === 'queue') {
            this.selectedToolValue = {
              kind: 'queue'
            };
          } else {
            var firstColor = levelSession.level.config.availableColors[0];
            if (firstColor === undefined) {
              throw new Error('A playable level needs at least one available color.');
            }
            this.selectedToolValue = {
              kind: 'color',
              colorId: firstColor
            };
          }
        }
        var _proto = GameManager.prototype;
        _proto.selectColor = function selectColor(colorId) {
          if (this.session.level.config.playMode !== 'free') {
            throw new Error('Queue levels do not allow manual color selection.');
          }
          if (!this.session.level.config.availableColors.includes(colorId)) {
            throw new Error("Color " + colorId + " is not available in this level.");
          }
          this.selectedToolValue = {
            kind: 'color',
            colorId: colorId
          };
        };
        _proto.selectEraser = function selectEraser() {
          this.selectedToolValue = {
            kind: 'eraser'
          };
        };
        _proto.selectQueue = function selectQueue() {
          if (this.session.level.config.playMode !== 'queue') {
            throw new Error('Only queue levels can select the queue tool.');
          }
          this.selectedToolValue = {
            kind: 'queue'
          };
        };
        _proto.selectTrayColor = function selectTrayColor(colorId) {
          if (!this.session.selectTrayColor(colorId)) {
            return false;
          }
          this.selectedToolValue = {
            kind: 'queue'
          };
          return true;
        };
        _proto.beginStroke = function beginStroke() {
          this.session.beginStroke(this.selectedToolValue);
        };
        _proto.extendStroke = function extendStroke(indices) {
          var changes = this.session.extendStroke(indices);
          if (changes.length > 0) {
            this.timer.startOnFirstEffectiveOperation();
            return true;
          }
          return false;
        };
        _proto.endStroke = function endStroke() {
          return this.session.endStroke();
        };
        _proto.createCompletedScore = function createCompletedScore() {
          if (!this.session.isCompleted()) {
            throw new Error('Cannot create a score before the level is completed.');
          }
          var completionTimeMs = this.timer.complete();
          var completedAt = this.wallMs();
          var baseScore = {
            submissionId: this.createId(),
            userId: this.user.userId,
            nickname: this.user.nickname,
            avatar: this.user.avatar,
            levelId: this.session.level.config.levelId,
            setId: this.session.level.config.setId,
            completionTimeMs: completionTimeMs,
            skillUseCount: this.session.skillUseCount,
            errorCount: this.session.errorCount,
            effectiveOperationCount: this.session.effectiveOperationCount,
            maxCorrectStreak: this.session.maxCorrectStreak,
            completedAt: completedAt,
            weekKey: weekKeyForTimestamp(completedAt),
            scoreType: this.session.skillUseCount === 0 ? 'no-skill' : 'normal',
            clientVersion: '0.1.0',
            scoreSignature: null,
            suspiciousFlag: false
          };
          var antiCheat = new AntiCheatValidator().validate(baseScore, this.session.level.targetCount, this.timer.suspicious);
          return _extends({}, baseScore, {
            suspiciousFlag: antiCheat.suspicious
          });
        };
        _createClass(GameManager, [{
          key: "selectedTool",
          get: function get() {
            return this.selectedToolValue;
          }
        }]);
        return GameManager;
      }());
      function weekKeyForTimestamp(timestamp) {
        var shanghaiDate = new Date(timestamp + 8 * 60 * 60 * 1000);
        var day = shanghaiDate.getUTCDay();
        var daysSinceMonday = (day + 6) % 7;
        shanghaiDate.setUTCDate(shanghaiDate.getUTCDate() - daysSinceMonday);
        var year = shanghaiDate.getUTCFullYear();
        var month = String(shanghaiDate.getUTCMonth() + 1).padStart(2, '0');
        var date = String(shanghaiDate.getUTCDate()).padStart(2, '0');
        return year + "-" + month + "-" + date;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/honor-manager.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('createInitialHonorState', createInitialHonorState);
      cclegacy._RF.push({}, "833b7l+Z2xFRo6CzyGJWk2P", "honor-manager", undefined);
      function createInitialHonorState() {
        return {
          achievementIds: [],
          skillInventory: {
            friendshipInsightCards: 0,
            lastAwardDateByLevel: {}
          }
        };
      }
      var HonorManager = exports('HonorManager', /*#__PURE__*/function () {
        function HonorManager(state) {
          this.state = state;
        }
        var _proto = HonorManager.prototype;
        _proto.awardPersonalBestSkill = function awardPersonalBestSkill(levelId, localDateKey, isPersonalBest) {
          if (!isPersonalBest || this.state.skillInventory.lastAwardDateByLevel[levelId] === localDateKey) {
            return {
              awarded: false,
              cardsAfterAward: this.state.skillInventory.friendshipInsightCards
            };
          }
          this.state.skillInventory.lastAwardDateByLevel[levelId] = localDateKey;
          if (this.state.skillInventory.friendshipInsightCards >= 3) {
            return {
              awarded: false,
              cardsAfterAward: 3
            };
          }
          this.state.skillInventory.friendshipInsightCards += 1;
          return {
            awarded: true,
            cardsAfterAward: this.state.skillInventory.friendshipInsightCards
          };
        };
        _proto.consumeFriendshipInsight = function consumeFriendshipInsight() {
          if (this.state.skillInventory.friendshipInsightCards <= 0) {
            return false;
          }
          this.state.skillInventory.friendshipInsightCards -= 1;
          return true;
        };
        _proto.recordLevelCompletion = function recordLevelCompletion(levelRole, levelId, score) {
          var _this = this;
          var unlocked = [];
          var add = function add(achievementId) {
            var result = _this.unlock(achievementId);
            if (result !== null) {
              unlocked.push(result);
            }
          };
          if (levelId.endsWith('-01')) {
            add('first-beads');
          }
          if (levelId.endsWith('-02')) {
            add('queue-apprentice');
          }
          if (levelRole === 'official') {
            add('first-realized');
            if (score.errorCount === 0 && score.skillUseCount === 0) {
              add('pure-hand-master');
            }
          }
          if (levelRole === 'custom') {
            add('custom-designer');
          }
          if (score.maxCorrectStreak >= 50) {
            add('streak-50');
          }
          if (score.maxCorrectStreak >= 100) {
            add('streak-100');
          }
          return unlocked;
        };
        _proto.unlock = function unlock(achievementId) {
          if (this.state.achievementIds.includes(achievementId)) {
            return null;
          }
          this.state.achievementIds.push(achievementId);
          return achievementId;
        };
        _proto.has = function has(achievementId) {
          return this.state.achievementIds.includes(achievementId);
        };
        return HonorManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/level-manager.component.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './pattern-loader.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, resources, JsonAsset, resolveLevel, parseLevelConfig, parsePatternConfig;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      resources = module.resources;
      JsonAsset = module.JsonAsset;
    }, function (module) {
      resolveLevel = module.resolveLevel;
      parseLevelConfig = module.parseLevelConfig;
      parsePatternConfig = module.parsePatternConfig;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7f9c1BojQ5EM6bT5wBytNqM", "level-manager.component", undefined);
      var LEVEL_RESOURCES = {
        'tutorial-heart-01': {
          levelPath: 'configs/levels/level-01',
          patternPath: 'patterns/tutorial-heart.pattern'
        },
        'rainbow-balloon-02': {
          levelPath: 'configs/levels/level-02',
          patternPath: 'patterns/rainbow-balloon.pattern'
        },
        'orange-cat-03': {
          levelPath: 'configs/levels/level-03',
          patternPath: 'patterns/orange-cat.pattern'
        }
      };
      var LevelManager = exports('LevelManager', /*#__PURE__*/function () {
        function LevelManager() {
          this.pattern = null;
        }
        var _proto = LevelManager.prototype;
        _proto.loadLevel = /*#__PURE__*/function () {
          var _loadLevel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(levelId) {
            var resource, pattern, level;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  resource = LEVEL_RESOURCES[levelId];
                  if (!(resource === undefined)) {
                    _context.next = 3;
                    break;
                  }
                  throw new Error("Unknown level ID " + levelId + ".");
                case 3:
                  _context.t0 = parsePatternConfig;
                  _context.next = 6;
                  return this.loadJson(resource.patternPath);
                case 6:
                  _context.t1 = _context.sent;
                  pattern = (0, _context.t0)(_context.t1);
                  this.pattern = pattern;
                  _context.t2 = parseLevelConfig;
                  _context.next = 12;
                  return this.loadJson(resource.levelPath);
                case 12:
                  _context.t3 = _context.sent;
                  level = (0, _context.t2)(_context.t3);
                  return _context.abrupt("return", resolveLevel(pattern, level));
                case 15:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function loadLevel(_x) {
            return _loadLevel.apply(this, arguments);
          }
          return loadLevel;
        }();
        _proto.getLoadedPattern = function getLoadedPattern() {
          if (this.pattern === null) {
            throw new Error('Pattern has not been loaded.');
          }
          return this.pattern;
        };
        _proto.loadJson = function loadJson(path) {
          return new Promise(function (resolve, reject) {
            resources.load(path, JsonAsset, function (error, asset) {
              if (error !== null && error !== undefined) {
                reject(error);
                return;
              }
              if (asset === null || asset === undefined) {
                reject(new Error("JSON resource " + path + " returned no asset."));
                return;
              }
              resolve(asset.json);
            });
          });
        };
        return LevelManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/level-session.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('rasterizeGridLine', rasterizeGridLine);
      cclegacy._RF.push({}, "a9798WjrwpCsLsJaO4yDHKP", "level-session", undefined);
      var LevelSession = exports('LevelSession', /*#__PURE__*/function () {
        function LevelSession(level) {
          this.board = void 0;
          this.queue = void 0;
          this.undoStack = [];
          this.activeTool = null;
          this.activeQueueColorId = null;
          this.activeChanges = new Map();
          this.activeQueueBefore = [];
          this.activeSelectedQueueColorBefore = null;
          this.activeRepairCountBefore = 0;
          this.activeErrorCountBefore = 0;
          this.activeEffectiveOperationCountBefore = 0;
          this.activeCorrectStreakBefore = 0;
          this.activeMaxCorrectStreakBefore = 0;
          this.activeNewErrors = 0;
          this.errorCountValue = 0;
          this.effectiveOperationCountValue = 0;
          this.adSkillUseCountValue = 0;
          this.friendshipSkillUseCountValue = 0;
          this.selectedQueueColorId = null;
          this.repairCountValue = 0;
          this.correctStreakValue = 0;
          this.maxCorrectStreakValue = 0;
          this.level = level;
          this.board = Array(level.boardWidth * level.boardHeight).fill(0);
          this.queue = level.config.playMode === 'queue' ? shuffleDeterministically(level.targetColors.filter(function (colorId) {
            return colorId > 0;
          }), level.config.queueSeed) : [];
          this.repairCountValue = level.config.initialRepairCount;
          this.ensureSelectedTrayColor();
        }
        var _proto = LevelSession.prototype;
        _proto.cellValue = function cellValue(index) {
          var _this$board$index;
          this.assertBoardIndex(index);
          return (_this$board$index = this.board[index]) != null ? _this$board$index : 0;
        };
        _proto.applyStroke = function applyStroke(rawIndices, tool) {
          this.beginStroke(tool);
          this.extendStroke(rawIndices);
          return this.endStroke();
        };
        _proto.beginStroke = function beginStroke(tool) {
          if (this.activeTool !== null) {
            throw new Error('A stroke is already active.');
          }
          if (tool.kind === 'queue' && this.level.config.playMode !== 'queue') {
            throw new Error('Queue tools require a queue level.');
          }
          this.activeTool = tool;
          this.activeQueueColorId = tool.kind === 'queue' ? this.selectedQueueColorId : null;
          this.activeChanges.clear();
          this.activeQueueBefore = this.queue.slice();
          this.activeSelectedQueueColorBefore = this.selectedQueueColorId;
          this.activeRepairCountBefore = this.repairCountValue;
          this.activeErrorCountBefore = this.errorCountValue;
          this.activeEffectiveOperationCountBefore = this.effectiveOperationCountValue;
          this.activeCorrectStreakBefore = this.correctStreakValue;
          this.activeMaxCorrectStreakBefore = this.maxCorrectStreakValue;
          this.activeNewErrors = 0;
        };
        _proto.extendStroke = function extendStroke(rawIndices) {
          if (this.activeTool === null) {
            throw new Error('No stroke is active.');
          }
          var indices = Array.from(new Set(rawIndices));
          var changes = [];
          for (var _i = 0, _indices = indices; _i < _indices.length; _i++) {
            var _this$level$targetCol, _this$board$index2;
            var index = _indices[_i];
            if (!Number.isInteger(index) || index < 0 || index >= this.board.length || this.activeChanges.has(index)) {
              continue;
            }
            var target = (_this$level$targetCol = this.level.targetColors[index]) != null ? _this$level$targetCol : 0;
            if (target === 0) {
              continue;
            }
            var before = (_this$board$index2 = this.board[index]) != null ? _this$board$index2 : 0;
            var after = this.resolveAfterValue(before, target);
            if (after === null || before === after) {
              continue;
            }
            this.board[index] = after;
            var change = {
              index: index,
              before: before,
              after: after
            };
            this.activeChanges.set(index, change);
            changes.push(change);
            this.effectiveOperationCountValue += 1;
            if (after === 0) {
              this.correctStreakValue = 0;
            } else if (after === target) {
              this.correctStreakValue += 1;
              this.maxCorrectStreakValue = Math.max(this.maxCorrectStreakValue, this.correctStreakValue);
            } else {
              this.activeNewErrors += 1;
              this.errorCountValue += 1;
              this.correctStreakValue = 0;
            }
          }
          return changes;
        };
        _proto.endStroke = function endStroke() {
          if (this.activeTool === null) {
            throw new Error('No stroke is active.');
          }
          var changes = Array.from(this.activeChanges.values());
          var newErrors = this.activeNewErrors;
          this.activeTool = null;
          this.activeQueueColorId = null;
          this.activeChanges.clear();
          this.activeNewErrors = 0;
          this.ensureSelectedTrayColor();
          if (changes.length > 0) {
            this.undoStack.push({
              changes: changes,
              queueBefore: this.activeQueueBefore,
              selectedQueueColorBefore: this.activeSelectedQueueColorBefore,
              repairCountBefore: this.activeRepairCountBefore,
              errorCountBefore: this.activeErrorCountBefore,
              effectiveOperationCountBefore: this.activeEffectiveOperationCountBefore,
              correctStreakBefore: this.activeCorrectStreakBefore,
              maxCorrectStreakBefore: this.activeMaxCorrectStreakBefore
            });
          }
          return {
            changed: changes.length > 0,
            changes: changes,
            newErrors: newErrors,
            completed: this.isCompleted()
          };
        };
        _proto.undo = function undo() {
          var _this = this;
          var step = this.undoStack[this.undoStack.length - 1];
          if (step === undefined) {
            return false;
          }
          if (this.level.config.playMode === 'queue' && step.changes.some(function (change) {
            var _this$level$targetCol2;
            var target = (_this$level$targetCol2 = _this.level.targetColors[change.index]) != null ? _this$level$targetCol2 : 0;
            return change.after > 0 && change.after !== target;
          })) {
            return false;
          }
          this.undoStack.pop();
          for (var index = step.changes.length - 1; index >= 0; index -= 1) {
            var change = step.changes[index];
            if (change !== undefined) {
              this.board[change.index] = change.before;
            }
          }
          replaceArray(this.queue, step.queueBefore);
          this.selectedQueueColorId = step.selectedQueueColorBefore;
          this.repairCountValue = step.repairCountBefore;
          this.errorCountValue = step.errorCountBefore;
          this.effectiveOperationCountValue = step.effectiveOperationCountBefore;
          this.correctStreakValue = step.correctStreakBefore;
          this.maxCorrectStreakValue = step.maxCorrectStreakBefore;
          this.ensureSelectedTrayColor();
          return true;
        };
        _proto.selectTrayColor = function selectTrayColor(colorId) {
          if (this.level.config.playMode !== 'queue' || !this.activeTrayColorIds().includes(colorId)) {
            return false;
          }
          this.selectedQueueColorId = colorId;
          return true;
        };
        _proto.grantRepairCount = function grantRepairCount(count) {
          if (count === void 0) {
            count = 1;
          }
          if (!Number.isInteger(count) || count < 1) {
            throw new Error('Repair count grant must be a positive integer.');
          }
          this.repairCountValue += count;
        };
        _proto.registerSkillUse = function registerSkillUse(skillType) {
          if (skillType === void 0) {
            skillType = 'ad-highlight';
          }
          if (skillType === 'ad-highlight' || skillType === 'repair-tweezers') {
            if (this.adSkillUseCountValue >= this.level.config.skillLimit) {
              return false;
            }
            this.adSkillUseCountValue += 1;
            return true;
          }
          if (this.friendshipSkillUseCountValue >= 1) {
            return false;
          }
          this.friendshipSkillUseCountValue += 1;
          return true;
        };
        _proto.upcomingColors = function upcomingColors(count) {
          if (this.level.config.playMode !== 'queue') {
            return [];
          }
          var active = this.activeTrayColorIds();
          var selected = this.selectedQueueColorId;
          var ordered = selected === null ? active : [selected].concat(active.filter(function (colorId) {
            return colorId !== selected;
          }));
          return ordered.slice(0, Math.max(0, count));
        };
        _proto.nextIncorrectTargetIndex = function nextIncorrectTargetIndex() {
          var _this$nextIncorrectTa;
          return (_this$nextIncorrectTa = this.nextIncorrectTargetIndices(1)[0]) != null ? _this$nextIncorrectTa : null;
        };
        _proto.nextIncorrectTargetIndices = function nextIncorrectTargetIndices(count) {
          var selected = [];
          var colors = this.level.config.playMode === 'queue' ? this.upcomingColors(count) : [];
          for (var _iterator = _createForOfIteratorHelperLoose(colors), _step; !(_step = _iterator()).done;) {
            var colorId = _step.value;
            var _index = this.findFirstUnresolvedColor(colorId, selected);
            if (_index !== null) {
              selected.push(_index);
            }
          }
          if (colors.length === 0) {
            for (var index = 0; index < this.board.length; index += 1) {
              var _this$level$targetCol3;
              var target = (_this$level$targetCol3 = this.level.targetColors[index]) != null ? _this$level$targetCol3 : 0;
              if (target > 0 && this.board[index] !== target) {
                selected.push(index);
                if (selected.length >= count) {
                  break;
                }
              }
            }
          }
          return selected;
        };
        _proto.isCompleted = function isCompleted() {
          if (this.level.config.playMode === 'queue' && this.queue.length > 0) {
            return false;
          }
          for (var index = 0; index < this.board.length; index += 1) {
            var _this$level$targetCol4;
            var target = (_this$level$targetCol4 = this.level.targetColors[index]) != null ? _this$level$targetCol4 : 0;
            if (target > 0 && this.board[index] !== target) {
              return false;
            }
          }
          return true;
        };
        _proto.resolveAfterValue = function resolveAfterValue(before, target) {
          var tool = this.activeTool;
          if (tool === null) {
            return null;
          }
          if (tool.kind === 'eraser') {
            if (before === 0) {
              return null;
            }
            if (this.level.config.playMode === 'queue') {
              if (before === target || this.repairCountValue <= 0) {
                return null;
              }
              this.queue.push(before);
              this.repairCountValue -= 1;
            }
            return 0;
          }
          if (tool.kind === 'queue') {
            if (before !== 0) {
              return null;
            }
            var selected = this.activeQueueColorId;
            if (selected === null) {
              return null;
            }
            var queueIndex = this.queue.indexOf(selected);
            if (queueIndex < 0) {
              return null;
            }
            this.queue.splice(queueIndex, 1);
            return selected;
          }
          if (!this.level.config.availableColors.includes(tool.colorId)) {
            return null;
          }
          return tool.colorId;
        };
        _proto.colorCounts = function colorCounts() {
          var counts = new Map();
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.queue), _step2; !(_step2 = _iterator2()).done;) {
            var _counts$get;
            var colorId = _step2.value;
            counts.set(colorId, ((_counts$get = counts.get(colorId)) != null ? _counts$get : 0) + 1);
          }
          return counts;
        };
        _proto.activeTrayColorIds = function activeTrayColorIds() {
          var counts = this.colorCounts();
          return this.level.config.availableColors.filter(function (colorId) {
            var _counts$get2;
            return ((_counts$get2 = counts.get(colorId)) != null ? _counts$get2 : 0) > 0;
          }).slice(0, this.level.config.trayBatchSize);
        };
        _proto.ensureSelectedTrayColor = function ensureSelectedTrayColor() {
          if (this.level.config.playMode !== 'queue') {
            this.selectedQueueColorId = null;
            return;
          }
          var active = this.activeTrayColorIds();
          if (this.selectedQueueColorId === null || !active.includes(this.selectedQueueColorId)) {
            var _active$;
            this.selectedQueueColorId = (_active$ = active[0]) != null ? _active$ : null;
          }
        };
        _proto.findFirstUnresolvedColor = function findFirstUnresolvedColor(colorId, excluded) {
          for (var index = 0; index < this.board.length; index += 1) {
            if (!excluded.includes(index) && this.level.targetColors[index] === colorId && this.board[index] !== colorId) {
              return index;
            }
          }
          return null;
        };
        _proto.assertBoardIndex = function assertBoardIndex(index) {
          if (!Number.isInteger(index) || index < 0 || index >= this.board.length) {
            throw new RangeError("Board index " + index + " is out of range.");
          }
        };
        _createClass(LevelSession, [{
          key: "errorCount",
          get: function get() {
            return this.errorCountValue;
          }
        }, {
          key: "effectiveOperationCount",
          get: function get() {
            return this.effectiveOperationCountValue;
          }
        }, {
          key: "skillUseCount",
          get: function get() {
            return this.adSkillUseCountValue + this.friendshipSkillUseCountValue;
          }
        }, {
          key: "adSkillUseCount",
          get: function get() {
            return this.adSkillUseCountValue;
          }
        }, {
          key: "friendshipSkillUseCount",
          get: function get() {
            return this.friendshipSkillUseCountValue;
          }
        }, {
          key: "correctStreak",
          get: function get() {
            return this.correctStreakValue;
          }
        }, {
          key: "maxCorrectStreak",
          get: function get() {
            return this.maxCorrectStreakValue;
          }
        }, {
          key: "repairCount",
          get: function get() {
            return this.repairCountValue;
          }
        }, {
          key: "hasWrongCells",
          get: function get() {
            var _this2 = this;
            return this.board.some(function (value, index) {
              var _this2$level$targetCo;
              var target = (_this2$level$targetCo = _this2.level.targetColors[index]) != null ? _this2$level$targetCo : 0;
              return value > 0 && value !== target;
            });
          }
        }, {
          key: "completionRatio",
          get: function get() {
            var correct = 0;
            for (var index = 0; index < this.board.length; index += 1) {
              var _this$level$targetCol5;
              var target = (_this$level$targetCol5 = this.level.targetColors[index]) != null ? _this$level$targetCol5 : 0;
              if (target > 0 && this.board[index] === target) {
                correct += 1;
              }
            }
            return correct / this.level.targetCount;
          }
        }, {
          key: "traySnapshot",
          get: function get() {
            var counts = this.colorCounts();
            var colors = this.activeTrayColorIds().map(function (colorId) {
              var _counts$get3;
              return {
                colorId: colorId,
                remainingCount: (_counts$get3 = counts.get(colorId)) != null ? _counts$get3 : 0
              };
            });
            return {
              selectedColorId: this.selectedQueueColorId,
              colors: colors,
              remainingCount: this.queue.length,
              repairCount: this.repairCountValue
            };
          }
        }]);
        return LevelSession;
      }());
      function shuffleDeterministically(values, seed) {
        var shuffled = values.slice();
        var state = seed >>> 0;
        var random = function random() {
          state = Math.imul(1664525, state) + 1013904223 >>> 0;
          return state / 0x100000000;
        };
        for (var index = shuffled.length - 1; index > 0; index -= 1) {
          var _shuffled$swapIndex;
          var swapIndex = Math.floor(random() * (index + 1));
          var current = shuffled[index];
          shuffled[index] = (_shuffled$swapIndex = shuffled[swapIndex]) != null ? _shuffled$swapIndex : 0;
          shuffled[swapIndex] = current != null ? current : 0;
        }
        return shuffled;
      }
      function replaceArray(target, source) {
        target.splice.apply(target, [0, target.length].concat(source));
      }
      function rasterizeGridLine(startIndex, endIndex, width, height) {
        var maxIndex = width * height - 1;
        if (!Number.isInteger(startIndex) || !Number.isInteger(endIndex) || startIndex < 0 || endIndex < 0 || startIndex > maxIndex || endIndex > maxIndex) {
          return [];
        }
        var x0 = startIndex % width;
        var y0 = Math.floor(startIndex / width);
        var x1 = endIndex % width;
        var y1 = Math.floor(endIndex / width);
        var dx = Math.abs(x1 - x0);
        var sx = x0 < x1 ? 1 : -1;
        var dy = -Math.abs(y1 - y0);
        var sy = y0 < y1 ? 1 : -1;
        var error = dx + dy;
        var indices = [];
        while (true) {
          indices.push(y0 * width + x0);
          if (x0 === x1 && y0 === y1) {
            break;
          }
          var doubledError = 2 * error;
          if (doubledError >= dy) {
            error += dy;
            x0 += sx;
          }
          if (doubledError <= dx) {
            error += dx;
            y0 += sy;
          }
        }
        return indices;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/local-storage-service.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4e408SVBA1L8ao3Zl9ilClD", "local-storage-service", undefined);
      var SAVE_KEY = exports('SAVE_KEY', 'bct.save.v2');
      var LEGACY_SAVE_KEY = exports('LEGACY_SAVE_KEY', 'bct.save.v1');
      var LocalStorageService = exports('LocalStorageService', /*#__PURE__*/function () {
        function LocalStorageService(backend, createDefault, validate, wallMs, migrateLegacy) {
          if (wallMs === void 0) {
            wallMs = Date.now;
          }
          this.backend = backend;
          this.createDefault = createDefault;
          this.validate = validate;
          this.wallMs = wallMs;
          this.migrateLegacy = migrateLegacy;
        }
        var _proto = LocalStorageService.prototype;
        _proto.load = function load() {
          var raw = this.backend.getItem(SAVE_KEY);
          if (raw === null) {
            return this.loadLegacyOrDefault();
          }
          try {
            var parsed = JSON.parse(raw);
            return this.validate(parsed) ? parsed : this.backupAndReset(raw);
          } catch (_unused) {
            return this.backupAndReset(raw);
          }
        };
        _proto.save = function save(value) {
          if (!this.validate(value)) {
            throw new Error('Refusing to save invalid data.');
          }
          this.backend.setItem(SAVE_KEY, JSON.stringify(value));
        };
        _proto.backupAndReset = function backupAndReset(raw) {
          this.backend.setItem(SAVE_KEY + ".corrupt." + this.wallMs(), raw);
          return this.createDefault();
        };
        _proto.loadLegacyOrDefault = function loadLegacyOrDefault() {
          var raw = this.backend.getItem(LEGACY_SAVE_KEY);
          if (raw === null || this.migrateLegacy === undefined) {
            return this.createDefault();
          }
          try {
            var migrated = this.migrateLegacy(JSON.parse(raw));
            if (migrated === null || !this.validate(migrated)) {
              return this.createDefault();
            }
            this.save(migrated);
            return migrated;
          } catch (_unused2) {
            this.backend.setItem(LEGACY_SAVE_KEY + ".corrupt." + this.wallMs(), raw);
            return this.createDefault();
          }
        };
        return LocalStorageService;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./clock.ts', './stopwatch-timer.ts', './ad-manager.ts', './anti-cheat-validator.ts', './creative-workshop.ts', './custom-pattern.ts', './difficulty-calculator.ts', './economics.ts', './friendship-skill.ts', './game-manager.ts', './honor-manager.ts', './level-manager.component.ts', './level-session.ts', './pattern-loader.ts', './point-manager.ts', './ranking-manager.ts', './reward-manager.ts', './score-calculator.ts', './contracts.ts', './local-storage-service.ts', './mock-platform-service.ts', './mock-services.ts', './service-contracts.ts', './app-controller.component.ts', './bead-board.component.ts', './bead-cell.component.ts', './creative-board.component.ts', './ui-factory.component.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/mock-platform-service.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "59e1aAS9xlP85giDj8eURxN", "mock-platform-service", undefined);
      var MockPlatformService = exports('MockPlatformService', /*#__PURE__*/function () {
        function MockPlatformService() {
          this.platformName = 'browser-mock';
          this.hiddenCallbacks = new Set();
          this.shownCallbacks = new Set();
        }
        var _proto = MockPlatformService.prototype;
        _proto.onHidden = function onHidden(callback) {
          var _this = this;
          this.hiddenCallbacks.add(callback);
          return function () {
            return _this.hiddenCallbacks["delete"](callback);
          };
        };
        _proto.onShown = function onShown(callback) {
          var _this2 = this;
          this.shownCallbacks.add(callback);
          return function () {
            return _this2.shownCallbacks["delete"](callback);
          };
        };
        _proto.emitHidden = function emitHidden() {
          this.hiddenCallbacks.forEach(function (callback) {
            return callback();
          });
        };
        _proto.emitShown = function emitShown() {
          this.shownCallbacks.forEach(function (callback) {
            return callback();
          });
        };
        return MockPlatformService;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/mock-services.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ranking-manager.ts', './game-manager.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, buildRanking, buildWeeklyRanking, weekKeyForTimestamp;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      buildRanking = module.buildRanking;
      buildWeeklyRanking = module.buildWeeklyRanking;
    }, function (module) {
      weekKeyForTimestamp = module.weekKeyForTimestamp;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6ffe9/tkX5IpZ/+Wpyyw1Yk", "mock-services", undefined);
      var MOCK_USER = exports('MOCK_USER', {
        userId: 'local-player',
        nickname: '拼豆玩家',
        avatar: 'mock://avatar/local-player'
      });
      var MockAdService = exports('MockAdService', /*#__PURE__*/function () {
        function MockAdService(durationMs) {
          if (durationMs === void 0) {
            durationMs = 3000;
          }
          this.nextResult = 'completed';
          this.durationMs = durationMs;
        }
        var _proto = MockAdService.prototype;
        _proto.setNextResult = function setNextResult(result) {
          this.nextResult = result;
        };
        _proto.showRewardedAd = /*#__PURE__*/function () {
          var _showRewardedAd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return new Promise(function (resolve) {
                    setTimeout(resolve, _this.durationMs);
                  });
                case 2:
                  return _context.abrupt("return", this.nextResult);
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function showRewardedAd() {
            return _showRewardedAd.apply(this, arguments);
          }
          return showRewardedAd;
        }();
        return MockAdService;
      }());
      var MockUserService = exports('MockUserService', /*#__PURE__*/function () {
        function MockUserService() {}
        var _proto2 = MockUserService.prototype;
        _proto2.getCurrentUser = /*#__PURE__*/function () {
          var _getCurrentUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", MOCK_USER);
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function getCurrentUser() {
            return _getCurrentUser.apply(this, arguments);
          }
          return getCurrentUser;
        }();
        return MockUserService;
      }());
      var MockShareService = exports('MockShareService', /*#__PURE__*/function () {
        function MockShareService() {}
        var _proto3 = MockShareService.prototype;
        _proto3.createChallenge = function createChallenge(levelId, challengerId, challengerTimeMs) {
          var now = Date.now();
          var weekKey = weekKeyForTimestamp(now);
          var queueSeed = hashText(levelId + ":" + weekKey);
          var query = new URLSearchParams({
            levelId: levelId,
            challengerId: challengerId,
            challengerTimeMs: String(challengerTimeMs),
            weekKey: weekKey,
            queueSeed: String(queueSeed),
            shareSource: 'result'
          });
          return {
            levelId: levelId,
            challengerId: challengerId,
            challengerTimeMs: challengerTimeMs,
            weekKey: weekKey,
            queueSeed: queueSeed,
            shareSource: 'result',
            mockUrl: "beads-come-true://challenge?" + query.toString()
          };
        };
        _proto3.createCreativeInvite = function createCreativeInvite(creativeSessionId, inviterId) {
          var query = new URLSearchParams({
            creativeSessionId: creativeSessionId,
            inviterId: inviterId,
            shareSource: 'creative-workshop'
          });
          return {
            creativeSessionId: creativeSessionId,
            inviterId: inviterId,
            shareSource: 'creative-workshop',
            mockUrl: "beads-come-true://creative?" + query.toString()
          };
        };
        return MockShareService;
      }());
      var MockRankingService = exports('MockRankingService', /*#__PURE__*/function () {
        function MockRankingService(localUserId, levelIds) {
          this.submitted = [];
          this.friendScores = void 0;
          this.globalScores = void 0;
          this.localUserId = localUserId;
          this.friendScores = generateScores(levelIds, 20, 'friend', 20817);
          this.globalScores = generateScores(levelIds, 50, 'global', 94103);
        }
        var _proto4 = MockRankingService.prototype;
        _proto4.submit = /*#__PURE__*/function () {
          var _submit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(score) {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  this.submitted.push(score);
                case 1:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function submit(_x) {
            return _submit.apply(this, arguments);
          }
          return submit;
        }();
        _proto4.getLevelRanking = /*#__PURE__*/function () {
          var _getLevelRanking = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(levelId, scope, noSkillOnly) {
            var base;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  base = scope === 'global' ? this.globalScores : this.friendScores;
                  if (!(scope === 'weekly-friends')) {
                    _context4.next = 3;
                    break;
                  }
                  return _context4.abrupt("return", buildWeeklyRanking([].concat(base, this.submitted), levelId, weekKeyForTimestamp(Date.now()), noSkillOnly, this.localUserId));
                case 3:
                  return _context4.abrupt("return", buildRanking([].concat(base, this.submitted), levelId, noSkillOnly, this.localUserId));
                case 4:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function getLevelRanking(_x2, _x3, _x4) {
            return _getLevelRanking.apply(this, arguments);
          }
          return getLevelRanking;
        }();
        return MockRankingService;
      }());
      function generateScores(levelIds, usersPerLevel, prefix, seed) {
        var state = seed >>> 0;
        var random = function random() {
          state = Math.imul(1664525, state) + 1013904223 >>> 0;
          return state / 0x100000000;
        };
        var scores = [];
        for (var _iterator = _createForOfIteratorHelperLoose(levelIds), _step; !(_step = _iterator()).done;) {
          var levelId = _step.value;
          for (var index = 0; index < usersPerLevel; index += 1) {
            var skillUseCount = random() < 0.68 ? 0 : 1;
            scores.push({
              submissionId: prefix + "-" + levelId + "-" + index,
              userId: prefix + "-user-" + index,
              nickname: "" + (prefix === 'friend' ? '好友' : '玩家') + (index + 1),
              avatar: "mock://avatar/" + prefix + "-" + index,
              levelId: levelId,
              setId: 'orange-cat-set',
              completionTimeMs: 45000 + Math.floor(random() * 210000),
              skillUseCount: skillUseCount,
              errorCount: Math.floor(random() * 12),
              effectiveOperationCount: 321 + Math.floor(random() * 140),
              maxCorrectStreak: 10 + Math.floor(random() * 100),
              completedAt: 1750000000000 + index * 1000,
              weekKey: weekKeyForTimestamp(Date.now()),
              scoreType: skillUseCount === 0 ? 'no-skill' : 'normal',
              clientVersion: '0.1.0',
              scoreSignature: null,
              suspiciousFlag: false
            });
          }
        }
        return scores;
      }
      function hashText(value) {
        var hash = 0x811c9dc5;
        for (var _iterator2 = _createForOfIteratorHelperLoose(value.split('')), _step2; !(_step2 = _iterator2()).done;) {
          var character = _step2.value;
          hash ^= character.charCodeAt(0);
          hash = Math.imul(hash, 0x01000193);
        }
        return hash >>> 0;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/pattern-loader.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        parseLevelConfig: parseLevelConfig,
        parsePatternConfig: parsePatternConfig,
        resolveLevel: resolveLevel
      });
      cclegacy._RF.push({}, "a32925MYTdF4bXSGkowpjSc", "pattern-loader", undefined);
      function isRecord(value) {
        return typeof value === 'object' && value !== null && !Array.isArray(value);
      }
      function requireString(record, key) {
        var value = record[key];
        if (typeof value !== 'string' || value.length === 0) {
          throw new Error(key + " must be a non-empty string.");
        }
        return value;
      }
      function requireInteger(record, key, minimum) {
        var value = record[key];
        if (!Number.isInteger(value) || value < minimum) {
          throw new Error(key + " must be an integer >= " + minimum + ".");
        }
        return value;
      }
      function requireIntegerArray(record, key) {
        var value = record[key];
        if (!Array.isArray(value) || value.some(function (item) {
          return !Number.isInteger(item);
        })) {
          throw new Error(key + " must be an integer array.");
        }
        return value.slice();
      }
      function requireEnum(record, key, values) {
        var value = record[key];
        if (typeof value !== 'string' || !values.includes(value)) {
          throw new Error(key + " must be one of: " + values.join(', ') + ".");
        }
        return value;
      }
      function parsePatternConfig(input) {
        if (!isRecord(input)) {
          throw new Error('Pattern config must be an object.');
        }
        var width = requireInteger(input, 'width', 1);
        var height = requireInteger(input, 'height', 1);
        var cells = parsePatternCells(input, width, height);
        if (cells.length !== width * height) {
          throw new Error('Pattern cells length does not match width × height.');
        }
        var rawPalette = input.palette;
        if (!Array.isArray(rawPalette) || rawPalette.length < 3 || rawPalette.length > 8) {
          throw new Error('palette must contain between 3 and 8 colors.');
        }
        var palette = rawPalette.map(function (item) {
          if (!isRecord(item)) {
            throw new Error('Palette entries must be objects.');
          }
          return {
            id: requireInteger(item, 'id', 1),
            name: requireString(item, 'name'),
            hex: requireString(item, 'hex')
          };
        });
        var paletteIds = new Set(palette.map(function (_ref) {
          var id = _ref.id;
          return id;
        }));
        if (paletteIds.size !== palette.length) {
          throw new Error('Palette color IDs must be unique.');
        }
        for (var _i = 0, _cells = cells; _i < _cells.length; _i++) {
          var colorId = _cells[_i];
          if (colorId !== 0 && !paletteIds.has(colorId)) {
            throw new Error("Pattern uses unknown color ID " + colorId + ".");
          }
        }
        return {
          patternId: requireString(input, 'patternId'),
          setId: requireString(input, 'setId'),
          name: requireString(input, 'name'),
          source: requireEnum(input, 'source', ['official', 'local-custom']),
          contentHash: requireString(input, 'contentHash'),
          width: width,
          height: height,
          palette: palette,
          cells: cells
        };
      }
      function parsePatternCells(input, width, height) {
        if (Array.isArray(input.cells)) {
          return requireIntegerArray(input, 'cells');
        }
        if (!Array.isArray(input.rows) || input.rows.length !== height || input.rows.some(function (row) {
          return typeof row !== 'string' || row.length !== width || !/^[0-8]+$/.test(row);
        })) {
          throw new Error('Pattern must provide integer cells or 0–8 encoded rows.');
        }
        return input.rows.flatMap(function (row) {
          return row.split('').map(function (value) {
            return Number(value);
          });
        });
      }
      function parseSourceRect(input) {
        if (!isRecord(input)) {
          throw new Error('sourceRect must be an object.');
        }
        return {
          x: requireInteger(input, 'x', 0),
          y: requireInteger(input, 'y', 0),
          width: requireInteger(input, 'width', 1),
          height: requireInteger(input, 'height', 1)
        };
      }
      function parseLevelConfig(input) {
        if (!isRecord(input)) {
          throw new Error('Level config must be an object.');
        }
        var unlockAfterLevelId = input.unlockAfterLevelId;
        if (unlockAfterLevelId !== null && typeof unlockAfterLevelId !== 'string') {
          throw new Error('unlockAfterLevelId must be a string or null.');
        }
        if (typeof input.rankingEnabled !== 'boolean') {
          throw new Error('rankingEnabled must be a boolean.');
        }
        return {
          levelId: requireString(input, 'levelId'),
          setId: requireString(input, 'setId'),
          levelName: requireString(input, 'levelName'),
          patternId: requireString(input, 'patternId'),
          levelRole: requireEnum(input, 'levelRole', ['practice', 'official', 'custom']),
          playMode: requireEnum(input, 'playMode', ['free', 'queue']),
          sourceRect: parseSourceRect(input.sourceRect),
          targetMode: requireEnum(input, 'targetMode', ['mask', 'all']),
          targetIndices: requireIntegerArray(input, 'targetIndices'),
          availableColors: requireIntegerArray(input, 'availableColors'),
          difficulty: requireInteger(input, 'difficulty', 1),
          expectedDurationSeconds: requireInteger(input, 'expectedDurationSeconds', 1),
          queuePreviewCount: requireInteger(input, 'queuePreviewCount', 0),
          queueSeed: requireInteger(input, 'queueSeed', 0),
          temporarySlots: requireInteger(input, 'temporarySlots', 0),
          trayBatchSize: requireInteger(input, 'trayBatchSize', 0),
          initialRepairCount: requireInteger(input, 'initialRepairCount', 0),
          scoreReward: requireInteger(input, 'scoreReward', 0),
          perfectScoreReward: requireInteger(input, 'perfectScoreReward', 0),
          skillLimit: requireInteger(input, 'skillLimit', 0),
          rankingEnabled: input.rankingEnabled,
          unlockAfterLevelId: unlockAfterLevelId
        };
      }
      function resolveLevel(pattern, level) {
        if (pattern.patternId !== level.patternId || pattern.setId !== level.setId) {
          throw new Error('Level does not reference the provided pattern.');
        }
        var rect = level.sourceRect;
        if (rect.x + rect.width > pattern.width || rect.y + rect.height > pattern.height) {
          throw new Error('Level sourceRect exceeds the pattern bounds.');
        }
        if (new Set(level.targetIndices).size !== level.targetIndices.length) {
          throw new Error('Level target indices must be unique.');
        }
        if (level.targetMode === 'mask' && level.targetIndices.length === 0) {
          throw new Error('Level must contain at least one target index.');
        }
        if (level.availableColors.length < 3 || level.availableColors.length > 8) {
          throw new Error('Level must expose between 3 and 8 colors.');
        }
        if (level.playMode === 'free' && level.temporarySlots !== 0) {
          throw new Error('Free-play levels cannot use temporary slots.');
        }
        if (level.playMode === 'queue' && level.queuePreviewCount < 1) {
          throw new Error('Queue levels must preview at least one bead.');
        }
        if (level.playMode === 'queue' && (level.trayBatchSize < 1 || level.trayBatchSize > 4)) {
          throw new Error('Queue levels must expose between 1 and 4 color trays.');
        }
        if (level.playMode === 'free' && level.trayBatchSize !== 0) {
          throw new Error('Free-play levels cannot expose color trays.');
        }
        if (level.levelRole !== 'official' && level.rankingEnabled) {
          throw new Error('Only official levels can enable rankings.');
        }
        var available = new Set(level.availableColors);
        var sourceIndices = level.targetMode === 'all' ? pattern.cells.map(function (colorId, sourceIndex) {
          var sourceX = sourceIndex % pattern.width;
          var sourceY = Math.floor(sourceIndex / pattern.width);
          return colorId > 0 && sourceX >= rect.x && sourceX < rect.x + rect.width && sourceY >= rect.y && sourceY < rect.y + rect.height ? sourceIndex : -1;
        }).filter(function (sourceIndex) {
          return sourceIndex >= 0;
        }) : level.targetIndices;
        var targetColors = Array(rect.width * rect.height).fill(0);
        for (var _iterator = _createForOfIteratorHelperLoose(sourceIndices), _step; !(_step = _iterator()).done;) {
          var _pattern$cells$source;
          var sourceIndex = _step.value;
          if (sourceIndex < 0 || sourceIndex >= pattern.cells.length) {
            throw new Error("Target index " + sourceIndex + " is out of pattern bounds.");
          }
          var sourceX = sourceIndex % pattern.width;
          var sourceY = Math.floor(sourceIndex / pattern.width);
          if (sourceX < rect.x || sourceX >= rect.x + rect.width || sourceY < rect.y || sourceY >= rect.y + rect.height) {
            throw new Error("Target index " + sourceIndex + " is outside sourceRect.");
          }
          var colorId = (_pattern$cells$source = pattern.cells[sourceIndex]) != null ? _pattern$cells$source : 0;
          if (colorId === 0) {
            throw new Error("Target index " + sourceIndex + " points to an empty pattern cell.");
          }
          if (!available.has(colorId)) {
            throw new Error("Target color " + colorId + " is not available in the level.");
          }
          var localX = sourceX - rect.x;
          var localY = sourceY - rect.y;
          targetColors[localY * rect.width + localX] = colorId;
        }
        return {
          config: level,
          boardWidth: rect.width,
          boardHeight: rect.height,
          targetColors: targetColors,
          targetCount: sourceIndices.length
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/point-manager.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('createEmptyPointState', createEmptyPointState);
      cclegacy._RF.push({}, "65fd5YBIClJPoBxt4rIuzAO", "point-manager", undefined);
      function createEmptyPointState() {
        return {
          availablePoints: 0,
          frozenPoints: 0,
          earnedPoints: 0,
          redeemedPoints: 0,
          transactions: [],
          firstClearLevelIds: [],
          perfectClearLevelIds: [],
          dailyRepeatCounts: {},
          dailyRepeatAwardTotals: {}
        };
      }
      var DEFAULT_REWARD_POLICY = {
        firstClearPoints: 50,
        perfectPoints: 20,
        repeatPoints: [10, 5, 2],
        dailyRepeatCap: 20
      };
      var PointManager = exports('PointManager', /*#__PURE__*/function () {
        function PointManager(state, userId, createId) {
          this.state = state;
          this.userId = userId;
          this.createId = createId;
        }
        var _proto = PointManager.prototype;
        _proto.awardClear = function awardClear(levelId, perfect, localDateKey, createdAt, policy) {
          if (policy === void 0) {
            policy = DEFAULT_REWARD_POLICY;
          }
          var transactions = [];
          var firstClear = !this.state.firstClearLevelIds.includes(levelId);
          if (firstClear) {
            this.state.firstClearLevelIds.push(levelId);
            transactions.push(this.credit(policy.firstClearPoints, 'first-clear', levelId, '首次通关奖励', createdAt));
          } else {
            var _this$state$dailyRepe, _policy$repeatPoints$, _this$state$dailyRepe2;
            var repeatKey = localDateKey + ":" + levelId;
            var previousCount = (_this$state$dailyRepe = this.state.dailyRepeatCounts[repeatKey]) != null ? _this$state$dailyRepe : 0;
            var proposedAmount = (_policy$repeatPoints$ = policy.repeatPoints[previousCount]) != null ? _policy$repeatPoints$ : 0;
            var awardedToday = (_this$state$dailyRepe2 = this.state.dailyRepeatAwardTotals[localDateKey]) != null ? _this$state$dailyRepe2 : 0;
            var amount = Math.min(proposedAmount, Math.max(0, policy.dailyRepeatCap - awardedToday));
            this.state.dailyRepeatCounts[repeatKey] = previousCount + 1;
            if (amount > 0) {
              this.state.dailyRepeatAwardTotals[localDateKey] = awardedToday + amount;
              transactions.push(this.credit(amount, 'repeat-clear', levelId, '重复通关奖励', createdAt));
            }
          }
          if (perfect && !this.state.perfectClearLevelIds.includes(levelId)) {
            this.state.perfectClearLevelIds.push(levelId);
            transactions.push(this.credit(policy.perfectPoints, 'perfect-clear', levelId, '首次完美通关奖励', createdAt));
          }
          return {
            awardedPoints: transactions.reduce(function (total, transaction) {
              return total + transaction.amount;
            }, 0),
            transactions: transactions
          };
        };
        _proto.freezeForRedemption = function freezeForRedemption(amount, sourceId, createdAt) {
          if (!Number.isInteger(amount) || amount <= 0) {
            throw new Error('Freeze amount must be a positive integer.');
          }
          if (this.state.availablePoints < amount) {
            throw new Error('Insufficient available points.');
          }
          this.state.availablePoints -= amount;
          this.state.frozenPoints += amount;
          return this.append(-amount, 'redemption-freeze', sourceId, '兑换积分冻结', createdAt);
        };
        _proto.approveFrozen = function approveFrozen(amount, sourceId, createdAt) {
          if (this.state.frozenPoints < amount) {
            throw new Error('Insufficient frozen points.');
          }
          this.state.frozenPoints -= amount;
          this.state.redeemedPoints += amount;
          return this.append(0, 'redemption-approved', sourceId, '兑换审核通过', createdAt);
        };
        _proto.refundFrozen = function refundFrozen(amount, sourceId, createdAt) {
          if (this.state.frozenPoints < amount) {
            throw new Error('Insufficient frozen points.');
          }
          this.state.frozenPoints -= amount;
          this.state.availablePoints += amount;
          return this.append(amount, 'redemption-refund', sourceId, '兑换审核拒绝退款', createdAt);
        };
        _proto.purchase = function purchase(amount, rewardId, createdAt) {
          if (!Number.isInteger(amount) || amount <= 0) {
            throw new Error('Purchase amount must be a positive integer.');
          }
          if (this.state.availablePoints < amount) {
            throw new Error('Insufficient available points.');
          }
          this.state.availablePoints -= amount;
          return this.append(-amount, 'store-purchase', rewardId, '数字商品购买', createdAt);
        };
        _proto.awardCreativeLike = function awardCreativeLike(amount, workId, createdAt) {
          if (!Number.isInteger(amount) || amount <= 0) {
            throw new Error('Creative like reward must be a positive integer.');
          }
          return this.credit(amount, 'creative-like', workId, '创意作品点赞里程碑', createdAt);
        };
        _proto.credit = function credit(amount, type, sourceId, description, createdAt) {
          this.state.availablePoints += amount;
          this.state.earnedPoints += amount;
          return this.append(amount, type, sourceId, description, createdAt);
        };
        _proto.append = function append(amount, type, sourceId, description, createdAt) {
          var transaction = {
            transactionId: this.createId(),
            userId: this.userId,
            amount: amount,
            type: type,
            sourceId: sourceId,
            description: description,
            createdAt: createdAt
          };
          if (this.state.transactions.some(function (_ref) {
            var transactionId = _ref.transactionId;
            return transactionId === transaction.transactionId;
          })) {
            throw new Error('Point transaction IDs must be unique.');
          }
          this.state.transactions.push(transaction);
          return transaction;
        };
        return PointManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ranking-manager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, _extends, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        buildRanking: buildRanking,
        buildWeeklyRanking: buildWeeklyRanking,
        compareScores: compareScores,
        selectBestPerUser: selectBestPerUser
      });
      cclegacy._RF.push({}, "45d7cWKmYJKU5JmXcFHYVGu", "ranking-manager", undefined);
      function compareScores(left, right) {
        return left.completionTimeMs - right.completionTimeMs || left.skillUseCount - right.skillUseCount || left.errorCount - right.errorCount || left.completedAt - right.completedAt;
      }
      function selectBestPerUser(scores) {
        var bestByUser = new Map();
        for (var _iterator = _createForOfIteratorHelperLoose(scores), _step; !(_step = _iterator()).done;) {
          var score = _step.value;
          var previous = bestByUser.get(score.userId);
          if (previous === undefined || compareScores(score, previous) < 0) {
            bestByUser.set(score.userId, score);
          }
        }
        return Array.from(bestByUser.values());
      }
      function buildRanking(scores, levelId, noSkillOnly, localUserId) {
        return selectBestPerUser(scores.filter(function (score) {
          return score.levelId === levelId && !score.suspiciousFlag && (!noSkillOnly || score.skillUseCount === 0 && score.errorCount === 0);
        })).sort(compareScores).map(function (score, index) {
          return _extends({}, score, {
            rank: index + 1,
            isLocalPlayer: score.userId === localUserId
          });
        });
      }
      function buildWeeklyRanking(scores, levelId, weekKey, noSkillOnly, localUserId) {
        return buildRanking(scores.filter(function (score) {
          return score.weekKey === weekKey;
        }), levelId, noSkillOnly, localUserId);
      }
      var RankingManager = exports('RankingManager', /*#__PURE__*/function () {
        function RankingManager() {}
        var _proto = RankingManager.prototype;
        _proto.build = function build(scores, levelId, noSkillOnly, localUserId) {
          return buildRanking(scores, levelId, noSkillOnly, localUserId);
        };
        return RankingManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/reward-manager.ts", ['cc', './economics.ts'], function (exports) {
  var cclegacy, PHYSICAL_REDEMPTION_POINTS, PHYSICAL_PROMO_STOCK;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      PHYSICAL_REDEMPTION_POINTS = module.PHYSICAL_REDEMPTION_POINTS;
      PHYSICAL_PROMO_STOCK = module.PHYSICAL_PROMO_STOCK;
    }],
    execute: function () {
      exports('createInitialRewardState', createInitialRewardState);
      cclegacy._RF.push({}, "c502aleLgpKMrLr6FudIGKO", "reward-manager", undefined);
      var KEYCHAIN_REWARD_ID = exports('KEYCHAIN_REWARD_ID', 'orange-cat-keychain');
      var KEYCHAIN_POINTS_COST = exports('KEYCHAIN_POINTS_COST', PHYSICAL_REDEMPTION_POINTS);
      function createInitialRewardState() {
        return {
          keychainStock: PHYSICAL_PROMO_STOCK,
          patternSetupPaidIds: ['orange-cat'],
          redemptions: [],
          purchasedRewardIds: []
        };
      }
      var RewardManager = exports('RewardManager', /*#__PURE__*/function () {
        function RewardManager(state, pointManager, userId, createId, physicalRedemptionEnabled) {
          if (physicalRedemptionEnabled === void 0) {
            physicalRedemptionEnabled = false;
          }
          this.state = state;
          this.pointManager = pointManager;
          this.userId = userId;
          this.createId = createId;
          this.physicalRedemptionEnabled = physicalRedemptionEnabled;
        }
        var _proto = RewardManager.prototype;
        _proto.submitKeychainRedemption = function submitKeychainRedemption(idempotencyKey, createdAt) {
          var _this = this;
          if (!this.physicalRedemptionEnabled) {
            throw new Error('Physical redemption is disabled during profitability testing.');
          }
          var existing = this.state.redemptions.find(function (record) {
            return record.idempotencyKey === idempotencyKey;
          });
          if (existing !== undefined) {
            return existing;
          }
          if (idempotencyKey.length < 8) {
            throw new Error('Idempotency key must contain at least 8 characters.');
          }
          var blockingRedemption = this.state.redemptions.find(function (record) {
            return record.userId === _this.userId && record.rewardId === KEYCHAIN_REWARD_ID && record.status !== 'rejected';
          });
          if (blockingRedemption !== undefined) {
            throw new Error('This account has already redeemed the keychain.');
          }
          if (this.state.keychainStock <= 0) {
            throw new Error('The keychain is out of stock.');
          }
          var record = {
            redemptionId: this.createId(),
            idempotencyKey: idempotencyKey,
            userId: this.userId,
            rewardId: KEYCHAIN_REWARD_ID,
            pointsCost: KEYCHAIN_POINTS_COST,
            recipientName: '演示用户',
            mobile: '138****0000',
            region: '演示地区',
            address: '仅用于原型展示，不是真实地址',
            status: 'pending',
            trackingNumber: null,
            createdAt: createdAt,
            reviewedAt: null
          };
          this.pointManager.freezeForRedemption(KEYCHAIN_POINTS_COST, record.redemptionId, createdAt);
          this.state.keychainStock -= 1;
          this.state.redemptions.push(record);
          return record;
        };
        _proto.approve = function approve(redemptionId, reviewedAt) {
          var record = this.requirePending(redemptionId);
          this.pointManager.approveFrozen(record.pointsCost, record.redemptionId, reviewedAt);
          record.status = 'approved';
          record.reviewedAt = reviewedAt;
          return record;
        };
        _proto.reject = function reject(redemptionId, reviewedAt) {
          var record = this.requirePending(redemptionId);
          this.pointManager.refundFrozen(record.pointsCost, record.redemptionId, reviewedAt);
          this.state.keychainStock += 1;
          record.status = 'rejected';
          record.reviewedAt = reviewedAt;
          return record;
        };
        _proto.requirePending = function requirePending(redemptionId) {
          var record = this.state.redemptions.find(function (candidate) {
            return candidate.redemptionId === redemptionId;
          });
          if (record === undefined) {
            throw new Error('Redemption was not found.');
          }
          if (record.status !== 'pending') {
            throw new Error('Only pending redemptions can be reviewed.');
          }
          return record;
        };
        return RewardManager;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/score-calculator.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4a724i/eaNNU6q+J5iGoT7z", "score-calculator", undefined);
      var ScoreCalculator = exports('ScoreCalculator', /*#__PURE__*/function () {
        function ScoreCalculator() {}
        var _proto = ScoreCalculator.prototype;
        _proto.isPerfect = function isPerfect(errorCount, skillUseCount) {
          return errorCount === 0 && skillUseCount === 0;
        };
        _proto.formatLiveTime = function formatLiveTime(milliseconds) {
          return formatTime(milliseconds, 1);
        };
        _proto.formatResultTime = function formatResultTime(milliseconds) {
          return formatTime(milliseconds, 2);
        };
        return ScoreCalculator;
      }());
      function formatTime(milliseconds, decimalPlaces) {
        var safeMs = Math.max(0, Math.floor(milliseconds));
        var minutes = Math.floor(safeMs / 60000);
        var seconds = Math.floor(safeMs % 60000 / 1000);
        var divisor = decimalPlaces === 1 ? 100 : 10;
        var fraction = Math.floor(safeMs % 1000 / divisor);
        return minutes + ":" + String(seconds).padStart(2, '0') + "." + String(fraction).padStart(decimalPlaces, '0');
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/service-contracts.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "af0edE0mJJCl7YxR+nMejcG", "service-contracts", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/stopwatch-timer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "64e2e1I4z5KJIpnJNoJIzzd", "stopwatch-timer", undefined);
      var MAX_BACKGROUND_MS = 24 * 60 * 60 * 1000;
      var StopwatchTimer = exports('StopwatchTimer', /*#__PURE__*/function () {
        function StopwatchTimer(clock) {
          this.stateValue = 'idle';
          this.accumulatedMs = 0;
          this.runningSinceMonotonicMs = null;
          this.hiddenAtWallMs = null;
          this.suspiciousValue = false;
          this.clock = clock;
        }
        var _proto = StopwatchTimer.prototype;
        _proto.startOnFirstEffectiveOperation = function startOnFirstEffectiveOperation() {
          if (this.stateValue !== 'idle') {
            return false;
          }
          this.stateValue = 'running';
          this.runningSinceMonotonicMs = this.clock.monotonicMs();
          return true;
        };
        _proto.pauseForRewardedAd = function pauseForRewardedAd() {
          if (this.stateValue !== 'running') {
            return false;
          }
          this.syncForegroundTime();
          this.hiddenAtWallMs = null;
          this.stateValue = 'ad-paused';
          return true;
        };
        _proto.resumeAfterRewardedAd = function resumeAfterRewardedAd() {
          if (this.stateValue !== 'ad-paused') {
            return false;
          }
          this.stateValue = 'running';
          this.runningSinceMonotonicMs = this.clock.monotonicMs();
          return true;
        };
        _proto.onApplicationHidden = function onApplicationHidden() {
          if (this.stateValue !== 'running' || this.hiddenAtWallMs !== null) {
            return;
          }
          this.syncForegroundTime();
          this.hiddenAtWallMs = this.clock.wallMs();
        };
        _proto.onApplicationShown = function onApplicationShown() {
          if (this.stateValue !== 'running' || this.hiddenAtWallMs === null) {
            return;
          }
          var backgroundMs = this.clock.wallMs() - this.hiddenAtWallMs;
          if (backgroundMs < 0 || backgroundMs > MAX_BACKGROUND_MS) {
            this.suspiciousValue = true;
          }
          this.accumulatedMs += Math.max(0, backgroundMs);
          this.hiddenAtWallMs = null;
          this.runningSinceMonotonicMs = this.clock.monotonicMs();
        };
        _proto.complete = function complete() {
          if (this.stateValue === 'running') {
            if (this.hiddenAtWallMs !== null) {
              this.onApplicationShown();
            }
            this.syncForegroundTime();
          }
          this.stateValue = 'completed';
          this.runningSinceMonotonicMs = null;
          this.hiddenAtWallMs = null;
          return this.elapsedMs();
        };
        _proto.elapsedMs = function elapsedMs() {
          var elapsed = this.accumulatedMs;
          if (this.stateValue === 'running') {
            if (this.hiddenAtWallMs !== null) {
              elapsed += Math.max(0, this.clock.wallMs() - this.hiddenAtWallMs);
            } else if (this.runningSinceMonotonicMs !== null) {
              elapsed += Math.max(0, this.clock.monotonicMs() - this.runningSinceMonotonicMs);
            }
          }
          return Math.floor(elapsed);
        };
        _proto.reset = function reset() {
          this.stateValue = 'idle';
          this.accumulatedMs = 0;
          this.runningSinceMonotonicMs = null;
          this.hiddenAtWallMs = null;
          this.suspiciousValue = false;
        };
        _proto.syncForegroundTime = function syncForegroundTime() {
          if (this.runningSinceMonotonicMs === null) {
            return;
          }
          this.accumulatedMs += Math.max(0, this.clock.monotonicMs() - this.runningSinceMonotonicMs);
          this.runningSinceMonotonicMs = null;
        };
        _createClass(StopwatchTimer, [{
          key: "state",
          get: function get() {
            return this.stateValue;
          }
        }, {
          key: "suspicious",
          get: function get() {
            return this.suspiciousValue;
          }
        }]);
        return StopwatchTimer;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ui-factory.component.ts", ['cc'], function (exports) {
  var cclegacy, Color, Node, UITransform, Graphics, Label, HorizontalTextAlignment, VerticalTextAlignment, Vec3;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Color = module.Color;
      Node = module.Node;
      UITransform = module.UITransform;
      Graphics = module.Graphics;
      Label = module.Label;
      HorizontalTextAlignment = module.HorizontalTextAlignment;
      VerticalTextAlignment = module.VerticalTextAlignment;
      Vec3 = module.Vec3;
    }],
    execute: function () {
      exports({
        createButton: createButton,
        createLabel: createLabel,
        createRect: createRect,
        parseHexColor: parseHexColor
      });
      cclegacy._RF.push({}, "8893bUic6xK8b1e37LTQgd6", "ui-factory.component", undefined);
      var COLORS = exports('COLORS', {
        cream: new Color(255, 248, 234, 255),
        paper: new Color(255, 253, 247, 255),
        orange: new Color(242, 155, 91, 255),
        orangeDark: new Color(213, 116, 63, 255),
        mint: new Color(139, 201, 180, 255),
        brown: new Color(91, 64, 52, 255),
        muted: new Color(139, 122, 110, 255),
        pink: new Color(239, 160, 160, 255),
        white: new Color(255, 255, 255, 255),
        disabled: new Color(207, 199, 190, 255)
      });
      function createRect(parent, name, width, height, color, position, radius) {
        if (radius === void 0) {
          radius = 24;
        }
        var node = new Node(name);
        parent.addChild(node);
        node.setPosition(position);
        node.addComponent(UITransform).setContentSize(width, height);
        var graphics = node.addComponent(Graphics);
        graphics.fillColor = color;
        graphics.roundRect(-width / 2, -height / 2, width, height, radius);
        graphics.fill();
        return node;
      }
      function createLabel(parent, text, fontSize, color, position, width, height) {
        if (width === void 0) {
          width = 620;
        }
        if (height === void 0) {
          height = 80;
        }
        var node = new Node("Label:" + text.slice(0, 12));
        parent.addChild(node);
        node.setPosition(position);
        node.addComponent(UITransform).setContentSize(width, height);
        var label = node.addComponent(Label);
        label.string = text;
        label.fontSize = fontSize;
        label.lineHeight = Math.ceil(fontSize * 1.25);
        label.color = color;
        label.horizontalAlign = HorizontalTextAlignment.CENTER;
        label.verticalAlign = VerticalTextAlignment.CENTER;
        label.overflow = Label.Overflow.SHRINK;
        return label;
      }
      function createButton(parent, text, position, onPress, width, height, color, textColor) {
        if (width === void 0) {
          width = 560;
        }
        if (height === void 0) {
          height = 104;
        }
        if (color === void 0) {
          color = COLORS.orange;
        }
        if (textColor === void 0) {
          textColor = COLORS.brown;
        }
        var node = createRect(parent, "Button:" + text, width, height, color, position, 28);
        createLabel(node, text, 34, textColor, Vec3.ZERO, width - 40, height - 20);
        node.on(Node.EventType.TOUCH_END, onPress);
        return node;
      }
      function parseHexColor(hex) {
        var normalized = hex.startsWith('#') ? hex.slice(1) : hex;
        if (!/^[0-9a-fA-F]{6}$/.test(normalized)) {
          return COLORS.brown.clone();
        }
        return new Color(Number.parseInt(normalized.slice(0, 2), 16), Number.parseInt(normalized.slice(2, 4), 16), Number.parseInt(normalized.slice(4, 6), 16), 255);
      }
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});