import 'package:flutter/material.dart';
import 'package:progress_indicators/progress_indicators.dart';
import 'package:spaces/spaces.dart';
import 'package:yuuna/i18n/strings.g.dart';
import 'package:yuuna/media.dart';
import 'package:yuuna/pages.dart';

/// Used to indicate which captions are included on metadata
/// for a YouTube video.
class ClosedCaptionsIndicator extends BasePage {
  /// Create an instance of this page.
  const ClosedCaptionsIndicator({
    required this.item,
    super.key,
  });

  /// Media item this indicator pertains to.
  final MediaItem item;

  @override
  BasePageState<ClosedCaptionsIndicator> createState() =>
      _ClosedCaptionsIndicatorState();
}

class _ClosedCaptionsIndicatorState
    extends BasePageState<ClosedCaptionsIndicator> {
  @override
  Widget build(BuildContext context) {
    List<String>? cachedLanguages =
        PlayerYoutubeSource.instance.getCaptionsLanguages(
      item: widget.item,
      autoGenerated: false,
    );
    if (cachedLanguages != null) {
      return buildCaptionsData();
    }

    return FutureBuilder<void>(
      future: PlayerYoutubeSource.instance.getAvailableCaptionLanguages(
        item: widget.item,
        checkMounted: () => mounted,
        autoGenerated: true,
      ),
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return buildCaptionsQuerying();
        } else if (snapshot.hasError) {
          return buildCaptionsError();
        } else {
          return buildCaptionsData();
        }
      },
    );
  }

  Widget buildCaptionsData() {
    List<String> captionsLanguages =
        PlayerYoutubeSource.instance.getCaptionsLanguages(
              item: widget.item,
              autoGenerated: false,
            ) ??
            [];
    List<String>? autoLanguages =
        PlayerYoutubeSource.instance.getCaptionsLanguages(
              item: widget.item,
              autoGenerated: true,
            ) ??
            [];

    List<String> languageCodes = captionsLanguages;
    List<String> shortenedLanguageCodes = languageCodes;
    for (int i = 0; i < shortenedLanguageCodes.length; i++) {
      shortenedLanguageCodes[i] = shortenedLanguageCodes[i].substring(0, 2);
    }
    List<String> autoLanguageCodes = autoLanguages;
    List<String> shortenedAutoLanguageCodes = languageCodes;
    for (int i = 0; i < shortenedAutoLanguageCodes.length; i++) {
      shortenedLanguageCodes[i] = shortenedLanguageCodes[i].substring(0, 2);
    }
    String targetLanguage = appModel.targetLanguage.languageCode;
    String appLanguage = appModel.appLocale.languageCode;

    bool hasTargetLanguage = languageCodes.contains(targetLanguage) ||
        shortenedLanguageCodes.contains(targetLanguage);
    bool hasAppLanguage = languageCodes.contains(appLanguage) ||
        shortenedLanguageCodes.contains(appLanguage);

    bool hasNoLanguage = languageCodes.isEmpty;
    bool hasNoAutoLanguage = autoLanguageCodes.isEmpty;
    bool hasOtherLanguage =
        !hasTargetLanguage && !hasAppLanguage && !hasNoLanguage;

    bool hasAutoTargetLanguage = autoLanguageCodes.contains(targetLanguage) ||
        shortenedAutoLanguageCodes.contains(targetLanguage);
    bool hasAutoAppLanguage = autoLanguageCodes.contains(appLanguage) ||
        shortenedAutoLanguageCodes.contains(appLanguage);
    bool hasOtherAutoLanguage =
        !hasAutoTargetLanguage && !hasAutoAppLanguage && !hasNoAutoLanguage;

    if (hasTargetLanguage) {
      return buildCaptionsTarget();
    } else if (hasAutoTargetLanguage) {
      return buildCaptionsAutoTarget();
    } else if (hasAppLanguage) {
      return buildCaptionsApp();
    } else if (hasAutoAppLanguage) {
      return buildCaptionsAutoApp();
    } else if (hasOtherLanguage) {
      return buildCaptionsOther();
    } else if (hasOtherAutoLanguage) {
      return buildCaptionsAutoOther();
    } else {
      return buildCaptionsUnavailable();
    }
  }

  Widget buildCaptionsQuerying() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        buildCaptionsRow(
            icon: Icons.closed_caption,
            label: t.captions_query,
            loading: true,
            color: theme.unselectedWidgetColor),
        buildCaptionsRow(
          icon: Icons.closed_caption,
          label: t.captions_query,
          color: Colors.transparent,
        ),
      ],
    );
  }

  Widget buildCaptionsError() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        buildCaptionsRow(
          icon: Icons.error,
          label: t.captions_error,
          color: theme.unselectedWidgetColor,
        ),
        buildCaptionsRow(
          icon: Icons.error,
          label: t.captions_error,
          color: Colors.transparent,
        ),
      ],
    );
  }

  Widget buildCaptionsTarget() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        buildCaptionsRow(
          icon: Icons.language,
          label: t.captions_target,
          color: appModel.isDarkMode
              ? Colors.green.shade200
              : Colors.green.shade600,
        ),
        buildCaptionsRow(
          icon: Icons.closed_caption,
          label: t.captions_closed,
          color: appModel.isDarkMode
              ? Colors.green.shade200
              : Colors.green.shade600,
        ),
      ],
    );
  }

  Widget buildCaptionsApp() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        buildCaptionsRow(
          icon: Icons.language,
          label: t.captions_app,
          color:
              appModel.isDarkMode ? Colors.blue.shade200 : Colors.blue.shade600,
        ),
        buildCaptionsRow(
          icon: Icons.closed_caption,
          label: t.captions_closed,
          color: appModel.isDarkMode
              ? Colors.green.shade200
              : Colors.green.shade600,
        ),
      ],
    );
  }

  Widget buildCaptionsOther() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        buildCaptionsRow(
          icon: Icons.language,
          label: t.captions_other,
          color: appModel.isDarkMode
              ? Colors.orange.shade200
              : Colors.orange.shade600,
        ),
        buildCaptionsRow(
          icon: Icons.closed_caption,
          label: t.captions_closed,
          color: appModel.isDarkMode
              ? Colors.green.shade200
              : Colors.green.shade600,
        ),
      ],
    );
  }

  Widget buildCaptionsUnavailable() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        buildCaptionsRow(
          icon: Icons.subtitles_off,
          label: t.captions_unavailable,
          color:
              appModel.isDarkMode ? Colors.red.shade200 : Colors.red.shade600,
        ),
        buildCaptionsRow(
          icon: Icons.subtitles_off,
          label: t.captions_unavailable,
          color: Colors.transparent,
        ),
      ],
    );
  }

  Widget buildCaptionsAutoTarget() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        buildCaptionsRow(
          icon: Icons.language,
          label: t.captions_target,
          color: appModel.isDarkMode
              ? Colors.green.shade200
              : Colors.green.shade600,
        ),
        buildCaptionsRow(
          icon: Icons.subtitles,
          label: t.captions_auto,
          color: appModel.isDarkMode
              ? Colors.orange.shade200
              : Colors.orange.shade600,
        ),
      ],
    );
  }

  Widget buildCaptionsAutoApp() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        buildCaptionsRow(
          icon: Icons.language,
          label: t.captions_app,
          color:
              appModel.isDarkMode ? Colors.blue.shade200 : Colors.blue.shade600,
        ),
        buildCaptionsRow(
          icon: Icons.subtitles,
          label: t.captions_auto,
          color: appModel.isDarkMode
              ? Colors.orange.shade200
              : Colors.orange.shade600,
        ),
      ],
    );
  }

  Widget buildCaptionsAutoOther() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        buildCaptionsRow(
          icon: Icons.language,
          label: t.captions_other,
          color: appModel.isDarkMode
              ? Colors.orange.shade200
              : Colors.orange.shade600,
        ),
        buildCaptionsRow(
          icon: Icons.subtitles,
          label: t.captions_auto,
          color: appModel.isDarkMode
              ? Colors.orange.shade200
              : Colors.orange.shade600,
        ),
      ],
    );
  }

  Widget buildCaptionsRow({
    required String label,
    required IconData icon,
    required Color color,
    bool loading = false,
  }) {
    return Row(
      children: [
        Icon(
          icon,
          size: 12,
          color: color,
        ),
        const Space.small(),
        Text(
          label,
          style: TextStyle(
            color: color,
            fontSize: 12,
            fontWeight: FontWeight.w500,
          ),
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
          softWrap: true,
        ),
        if (loading)
          SizedBox(
            width: 10,
            child: JumpingDotsProgressIndicator(
              color: color,
            ),
          ),
      ],
    );
  }
}
