import { Code } from '@/domain/code';
import { Component } from '@angular/core';
import { AppCodeModule } from '@/components/doc/app.code';
import { AppDocSectionText } from '@/components/doc/app.docsectiontext';
import { AddressBookIcon } from 'primeng/icons/addressbook';
import { AlignCenterIcon } from 'primeng/icons/aligncenter';
import { AlignJustifyIcon } from 'primeng/icons/alignjustify';
import { AlignLeftIcon } from 'primeng/icons/alignleft';
import { AlignRightIcon } from 'primeng/icons/alignright';
import { AndroidIcon } from 'primeng/icons/android';
import { AngleDoubleDownIcon } from 'primeng/icons/angledoubledown';
import { AngleDoubleLeftIcon } from 'primeng/icons/angledoubleleft';
import { AngleDoubleRightIcon } from 'primeng/icons/angledoubleright';
import { AngleDoubleUpIcon } from 'primeng/icons/angledoubleup';
import { AngleDownIcon } from 'primeng/icons/angledown';
import { AngleLeftIcon } from 'primeng/icons/angleleft';
import { AngleRightIcon } from 'primeng/icons/angleright';
import { AngleUpIcon } from 'primeng/icons/angleup';
import { AppleIcon } from 'primeng/icons/apple';
import { ArrowCircleDownIcon } from 'primeng/icons/arrowcircledown';
import { ArrowCircleLeftIcon } from 'primeng/icons/arrowcircleleft';
import { ArrowCircleRightIcon } from 'primeng/icons/arrowcircleright';
import { ArrowCircleUpIcon } from 'primeng/icons/arrowcircleup';
import { ArrowDownIcon } from 'primeng/icons/arrowdown';
import { ArrowDownLeftIcon } from 'primeng/icons/arrowdownleft';
import { ArrowDownLeftAndArrowUpRightToCenterIcon } from 'primeng/icons/arrowdownleftandarrowuprighttocenter';
import { ArrowDownRightIcon } from 'primeng/icons/arrowdownright';
import { ArrowLeftIcon } from 'primeng/icons/arrowleft';
import { ArrowRightIcon } from 'primeng/icons/arrowright';
import { ArrowRightArrowLeftIcon } from 'primeng/icons/arrowrightarrowleft';
import { ArrowsAltIcon } from 'primeng/icons/arrowsalt';
import { ArrowsHIcon } from 'primeng/icons/arrowsh';
import { ArrowsVIcon } from 'primeng/icons/arrowsv';
import { ArrowUpIcon } from 'primeng/icons/arrowup';
import { ArrowUpLeftIcon } from 'primeng/icons/arrowupleft';
import { ArrowUpRightIcon } from 'primeng/icons/arrowupright';
import { ArrowUpRightAndArrowDownLeftFromCenterIcon } from 'primeng/icons/arrowuprightandarrowdownleftfromcenter';
import { AsteriksIcon } from 'primeng/icons/asteriks';
import { AtIcon } from 'primeng/icons/at';
import { BackwardIcon } from 'primeng/icons/backward';
import { BanIcon } from 'primeng/icons/ban';
import { BarcodeIcon } from 'primeng/icons/barcode';
import { BarsIcon } from 'primeng/icons/bars';
import { BellIcon } from 'primeng/icons/bell';
import { BellSlashIcon } from 'primeng/icons/bellslash';
import { BitcoinIcon } from 'primeng/icons/bitcoin';
import { BlankIcon } from 'primeng/icons/blank';
import { BoltIcon } from 'primeng/icons/bolt';
import { BookIcon } from 'primeng/icons/book';
import { BookmarkIcon } from 'primeng/icons/bookmark';
import { BookmarkFillIcon } from 'primeng/icons/bookmarkfill';
import { BoxIcon } from 'primeng/icons/box';
import { BriefcaseIcon } from 'primeng/icons/briefcase';
import { BuildingIcon } from 'primeng/icons/building';
import { BuildingColumnsIcon } from 'primeng/icons/buildingcolumns';
import { BullseyeIcon } from 'primeng/icons/bullseye';
import { CalculatorIcon } from 'primeng/icons/calculator';
import { CalendarIcon } from 'primeng/icons/calendar';
import { CalendarClockIcon } from 'primeng/icons/calendarclock';
import { CalendarMinusIcon } from 'primeng/icons/calendarminus';
import { CalendarPlusIcon } from 'primeng/icons/calendarplus';
import { CalendarTimesIcon } from 'primeng/icons/calendartimes';
import { CameraIcon } from 'primeng/icons/camera';
import { CarIcon } from 'primeng/icons/car';
import { CaretDownIcon } from 'primeng/icons/caretdown';
import { CaretLeftIcon } from 'primeng/icons/caretleft';
import { CaretRightIcon } from 'primeng/icons/caretright';
import { CaretUpIcon } from 'primeng/icons/caretup';
import { CartArrowDownIcon } from 'primeng/icons/cartarrowdown';
import { CartMinusIcon } from 'primeng/icons/cartminus';
import { CartPlusIcon } from 'primeng/icons/cartplus';
import { ChartBarIcon } from 'primeng/icons/chartbar';
import { ChartLineIcon } from 'primeng/icons/chartline';
import { ChartPieIcon } from 'primeng/icons/chartpie';
import { ChartScatterIcon } from 'primeng/icons/chartscatter';
import { CheckIcon } from 'primeng/icons/check';
import { CheckCircleIcon } from 'primeng/icons/checkcircle';
import { CheckSquareIcon } from 'primeng/icons/checksquare';
import { ChevronCircleDownIcon } from 'primeng/icons/chevroncircledown';
import { ChevronCircleLeftIcon } from 'primeng/icons/chevroncircleleft';
import { ChevronCircleRightIcon } from 'primeng/icons/chevroncircleright';
import { ChevronCircleUpIcon } from 'primeng/icons/chevroncircleup';
import { ChevronDownIcon } from 'primeng/icons/chevrondown';
import { ChevronLeftIcon } from 'primeng/icons/chevronleft';
import { ChevronRightIcon } from 'primeng/icons/chevronright';
import { ChevronUpIcon } from 'primeng/icons/chevronup';
import { CircleIcon } from 'primeng/icons/circle';
import { CircleFillIcon } from 'primeng/icons/circlefill';
import { CircleOffIcon } from 'primeng/icons/circleoff';
import { CircleOnIcon } from 'primeng/icons/circleon';
import { ClipboardIcon } from 'primeng/icons/clipboard';
import { ClockIcon } from 'primeng/icons/clock';
import { CloneIcon } from 'primeng/icons/clone';
import { CloudIcon } from 'primeng/icons/cloud';
import { CloudDownloadIcon } from 'primeng/icons/clouddownload';
import { CloudUploadIcon } from 'primeng/icons/cloudupload';
import { CodeIcon } from 'primeng/icons/code';
import { CogIcon } from 'primeng/icons/cog';
import { CommentIcon } from 'primeng/icons/comment';
import { CommentsIcon } from 'primeng/icons/comments';
import { CompassIcon } from 'primeng/icons/compass';
import { CopyIcon } from 'primeng/icons/copy';
import { CreditCardIcon } from 'primeng/icons/creditcard';
import { CrownIcon } from 'primeng/icons/crown';
import { DatabaseIcon } from 'primeng/icons/database';
import { DeleteLeftIcon } from 'primeng/icons/deleteleft';
import { DesktopIcon } from 'primeng/icons/desktop';
import { DirectionsIcon } from 'primeng/icons/directions';
import { DirectionsAltIcon } from 'primeng/icons/directionsalt';
import { DiscordIcon } from 'primeng/icons/discord';
import { DollarIcon } from 'primeng/icons/dollar';
import { DownloadIcon } from 'primeng/icons/download';
import { EjectIcon } from 'primeng/icons/eject';
import { EllipsisHIcon } from 'primeng/icons/ellipsish';
import { EllipsisVIcon } from 'primeng/icons/ellipsisv';
import { EnvelopeIcon } from 'primeng/icons/envelope';
import { EqualsIcon } from 'primeng/icons/equals';
import { EraserIcon } from 'primeng/icons/eraser';
import { EthereumIcon } from 'primeng/icons/ethereum';
import { EuroIcon } from 'primeng/icons/euro';
import { ExclamationCircleIcon } from 'primeng/icons/exclamationcircle';
import { ExclamationTriangleIcon } from 'primeng/icons/exclamationtriangle';
import { ExpandIcon } from 'primeng/icons/expand';
import { ExternalLinkIcon } from 'primeng/icons/externallink';
import { EyeIcon } from 'primeng/icons/eye';
import { EyeSlashIcon } from 'primeng/icons/eyeslash';
import { FacebookIcon } from 'primeng/icons/facebook';
import { FaceSmileIcon } from 'primeng/icons/facesmile';
import { FastBackwardIcon } from 'primeng/icons/fastbackward';
import { FastForwardIcon } from 'primeng/icons/fastforward';
import { FileIcon } from 'primeng/icons/file';
import { FileArrowUpIcon } from 'primeng/icons/filearrowup';
import { FileCheckIcon } from 'primeng/icons/filecheck';
import { FileEditIcon } from 'primeng/icons/fileedit';
import { FileExcelIcon } from 'primeng/icons/fileexcel';
import { FileExportIcon } from 'primeng/icons/fileexport';
import { FileImportIcon } from 'primeng/icons/fileimport';
import { FileOIcon } from 'primeng/icons/fileo';
import { FilePdfIcon } from 'primeng/icons/filepdf';
import { FilePlusIcon } from 'primeng/icons/fileplus';
import { FileWordIcon } from 'primeng/icons/fileword';
import { FilterIcon } from 'primeng/icons/filter';
import { FilterFillIcon } from 'primeng/icons/filterfill';
import { FilterSlashIcon } from 'primeng/icons/filterslash';
import { FlagIcon } from 'primeng/icons/flag';
import { FlagFillIcon } from 'primeng/icons/flagfill';
import { FolderIcon } from 'primeng/icons/folder';
import { FolderOpenIcon } from 'primeng/icons/folderopen';
import { FolderPlusIcon } from 'primeng/icons/folderplus';
import { ForwardIcon } from 'primeng/icons/forward';
import { GaugeIcon } from 'primeng/icons/gauge';
import { GiftIcon } from 'primeng/icons/gift';
import { GithubIcon } from 'primeng/icons/github';
import { GlobeIcon } from 'primeng/icons/globe';
import { GoogleIcon } from 'primeng/icons/google';
import { GraduationCapIcon } from 'primeng/icons/graduationcap';
import { HammerIcon } from 'primeng/icons/hammer';
import { HashtagIcon } from 'primeng/icons/hashtag';
import { HeadphonesIcon } from 'primeng/icons/headphones';
import { HeartIcon } from 'primeng/icons/heart';
import { HeartFillIcon } from 'primeng/icons/heartfill';
import { HistoryIcon } from 'primeng/icons/history';
import { HomeIcon } from 'primeng/icons/home';
import { HourglassIcon } from 'primeng/icons/hourglass';
import { IdCardIcon } from 'primeng/icons/idcard';
import { ImageIcon } from 'primeng/icons/image';
import { ImagesIcon } from 'primeng/icons/images';
import { InboxIcon } from 'primeng/icons/inbox';
import { IndianRupeeIcon } from 'primeng/icons/indianrupee';
import { InfoIcon } from 'primeng/icons/info';
import { InfoCircleIcon } from 'primeng/icons/infocircle';
import { InstagramIcon } from 'primeng/icons/instagram';
import { KeyIcon } from 'primeng/icons/key';
import { LanguageIcon } from 'primeng/icons/language';
import { LightbulbIcon } from 'primeng/icons/lightbulb';
import { LinkIcon } from 'primeng/icons/link';
import { LinkedinIcon } from 'primeng/icons/linkedin';
import { ListIcon } from 'primeng/icons/list';
import { ListCheckIcon } from 'primeng/icons/listcheck';
import { LockIcon } from 'primeng/icons/lock';
import { LockOpenIcon } from 'primeng/icons/lockopen';
import { MapIcon } from 'primeng/icons/map';
import { MapMarkerIcon } from 'primeng/icons/mapmarker';
import { MarsIcon } from 'primeng/icons/mars';
import { MegaphoneIcon } from 'primeng/icons/megaphone';
import { MicrochipIcon } from 'primeng/icons/microchip';
import { MicrochipAiIcon } from 'primeng/icons/microchipai';
import { MicrophoneIcon } from 'primeng/icons/microphone';
import { MicrosoftIcon } from 'primeng/icons/microsoft';
import { MinusIcon } from 'primeng/icons/minus';
import { MinusCircleIcon } from 'primeng/icons/minuscircle';
import { MobileIcon } from 'primeng/icons/mobile';
import { MoneyBillIcon } from 'primeng/icons/moneybill';
import { MoonIcon } from 'primeng/icons/moon';
import { ObjectsColumnIcon } from 'primeng/icons/objectscolumn';
import { PaletteIcon } from 'primeng/icons/palette';
import { PaperclipIcon } from 'primeng/icons/paperclip';
import { PauseIcon } from 'primeng/icons/pause';
import { PauseCircleIcon } from 'primeng/icons/pausecircle';
import { PaypalIcon } from 'primeng/icons/paypal';
import { PencilIcon } from 'primeng/icons/pencil';
import { PenToSquareIcon } from 'primeng/icons/pentosquare';
import { PercentageIcon } from 'primeng/icons/percentage';
import { PhoneIcon } from 'primeng/icons/phone';
import { PinterestIcon } from 'primeng/icons/pinterest';
import { PlayIcon } from 'primeng/icons/play';
import { PlayCircleIcon } from 'primeng/icons/playcircle';
import { PlusIcon } from 'primeng/icons/plus';
import { PlusCircleIcon } from 'primeng/icons/pluscircle';
import { PoundIcon } from 'primeng/icons/pound';
import { PowerOffIcon } from 'primeng/icons/poweroff';
import { PrimeIcon } from 'primeng/icons/prime';
import { PrintIcon } from 'primeng/icons/print';
import { QrcodeIcon } from 'primeng/icons/qrcode';
import { QuestionIcon } from 'primeng/icons/question';
import { QuestionCircleIcon } from 'primeng/icons/questioncircle';
import { ReceiptIcon } from 'primeng/icons/receipt';
import { RedditIcon } from 'primeng/icons/reddit';
import { RefreshIcon } from 'primeng/icons/refresh';
import { ReplayIcon } from 'primeng/icons/replay';
import { ReplyIcon } from 'primeng/icons/reply';
import { SaveIcon } from 'primeng/icons/save';
import { SearchIcon } from 'primeng/icons/search';
import { SearchMinusIcon } from 'primeng/icons/searchminus';
import { SearchPlusIcon } from 'primeng/icons/searchplus';
import { SendIcon } from 'primeng/icons/send';
import { ServerIcon } from 'primeng/icons/server';
import { ShareAltIcon } from 'primeng/icons/sharealt';
import { ShieldIcon } from 'primeng/icons/shield';
import { ShopIcon } from 'primeng/icons/shop';
import { ShoppingBagIcon } from 'primeng/icons/shoppingbag';
import { ShoppingCartIcon } from 'primeng/icons/shoppingcart';
import { SignInIcon } from 'primeng/icons/signin';
import { SignOutIcon } from 'primeng/icons/signout';
import { SitemapIcon } from 'primeng/icons/sitemap';
import { SlackIcon } from 'primeng/icons/slack';
import { SlidersHIcon } from 'primeng/icons/slidersh';
import { SlidersVIcon } from 'primeng/icons/slidersv';
import { SortIcon } from 'primeng/icons/sort';
import { SortAlphaAltDownIcon } from 'primeng/icons/sortalphaaltdown';
import { SortAlphaAltUpIcon } from 'primeng/icons/sortalphaaltup';
import { SortAlphaDownIcon } from 'primeng/icons/sortalphadown';
import { SortAlphaUpIcon } from 'primeng/icons/sortalphaup';
import { SortAltIcon } from 'primeng/icons/sortalt';
import { SortAltSlashIcon } from 'primeng/icons/sortaltslash';
import { SortAmountDownIcon } from 'primeng/icons/sortamountdown';
import { SortAmountDownAltIcon } from 'primeng/icons/sortamountdownalt';
import { SortAmountUpIcon } from 'primeng/icons/sortamountup';
import { SortAmountUpAltIcon } from 'primeng/icons/sortamountupalt';
import { SortDownIcon } from 'primeng/icons/sortdown';
import { SortDownFillIcon } from 'primeng/icons/sortdownfill';
import { SortNumericAltDownIcon } from 'primeng/icons/sortnumericaltdown';
import { SortNumericAltUpIcon } from 'primeng/icons/sortnumericaltup';
import { SortNumericDownIcon } from 'primeng/icons/sortnumericdown';
import { SortNumericUpIcon } from 'primeng/icons/sortnumericup';
import { SortUpIcon } from 'primeng/icons/sortup';
import { SortUpFillIcon } from 'primeng/icons/sortupfill';
import { SparklesIcon } from 'primeng/icons/sparkles';
import { SpinnerIcon } from 'primeng/icons/spinner';
import { SpinnerDottedIcon } from 'primeng/icons/spinnerdotted';
import { StarIcon } from 'primeng/icons/star';
import { StarFillIcon } from 'primeng/icons/starfill';
import { StarHalfIcon } from 'primeng/icons/starhalf';
import { StarHalfFillIcon } from 'primeng/icons/starhalffill';
import { StepBackwardIcon } from 'primeng/icons/stepbackward';
import { StepBackwardAltIcon } from 'primeng/icons/stepbackwardalt';
import { StepForwardIcon } from 'primeng/icons/stepforward';
import { StepForwardAltIcon } from 'primeng/icons/stepforwardalt';
import { StopIcon } from 'primeng/icons/stop';
import { StopCircleIcon } from 'primeng/icons/stopcircle';
import { StopwatchIcon } from 'primeng/icons/stopwatch';
import { SunIcon } from 'primeng/icons/sun';
import { SyncIcon } from 'primeng/icons/sync';
import { TableIcon } from 'primeng/icons/table';
import { TabletIcon } from 'primeng/icons/tablet';
import { TagIcon } from 'primeng/icons/tag';
import { TagsIcon } from 'primeng/icons/tags';
import { TelegramIcon } from 'primeng/icons/telegram';
import { ThLargeIcon } from 'primeng/icons/thlarge';
import { ThumbsDownIcon } from 'primeng/icons/thumbsdown';
import { ThumbsDownFillIcon } from 'primeng/icons/thumbsdownfill';
import { ThumbsUpIcon } from 'primeng/icons/thumbsup';
import { ThumbsUpFillIcon } from 'primeng/icons/thumbsupfill';
import { ThumbtackIcon } from 'primeng/icons/thumbtack';
import { TicketIcon } from 'primeng/icons/ticket';
import { TiktokIcon } from 'primeng/icons/tiktok';
import { TimesIcon } from 'primeng/icons/times';
import { TimesCircleIcon } from 'primeng/icons/timescircle';
import { TrashIcon } from 'primeng/icons/trash';
import { TrophyIcon } from 'primeng/icons/trophy';
import { TruckIcon } from 'primeng/icons/truck';
import { TurkishLiraIcon } from 'primeng/icons/turkishlira';
import { TwitchIcon } from 'primeng/icons/twitch';
import { TwitterIcon } from 'primeng/icons/twitter';
import { UndoIcon } from 'primeng/icons/undo';
import { UnlockIcon } from 'primeng/icons/unlock';
import { UploadIcon } from 'primeng/icons/upload';
import { UserIcon } from 'primeng/icons/user';
import { UserEditIcon } from 'primeng/icons/useredit';
import { UserMinusIcon } from 'primeng/icons/userminus';
import { UserPlusIcon } from 'primeng/icons/userplus';
import { UsersIcon } from 'primeng/icons/users';
import { VenusIcon } from 'primeng/icons/venus';
import { VerifiedIcon } from 'primeng/icons/verified';
import { VideoIcon } from 'primeng/icons/video';
import { VimeoIcon } from 'primeng/icons/vimeo';
import { VolumeDownIcon } from 'primeng/icons/volumedown';
import { VolumeOffIcon } from 'primeng/icons/volumeoff';
import { VolumeUpIcon } from 'primeng/icons/volumeup';
import { WalletIcon } from 'primeng/icons/wallet';
import { WarehouseIcon } from 'primeng/icons/warehouse';
import { WavePulseIcon } from 'primeng/icons/wavepulse';
import { WhatsappIcon } from 'primeng/icons/whatsapp';
import { WifiIcon } from 'primeng/icons/wifi';
import { WindowMaximizeIcon } from 'primeng/icons/windowmaximize';
import { WindowMinimizeIcon } from 'primeng/icons/windowminimize';
import { WrenchIcon } from 'primeng/icons/wrench';
import { YoutubeIcon } from 'primeng/icons/youtube';

@Component({
    selector: 'built-in-prime-icons-doc',
    standalone: true,
    imports: [
        AppDocSectionText,
        AppCodeModule,
        AddressBookIcon,
        AlignCenterIcon,
        AlignJustifyIcon,
        AlignLeftIcon,
        AlignRightIcon,
        AndroidIcon,
        AngleDoubleDownIcon,
        AngleDoubleLeftIcon,
        AngleDoubleRightIcon,
        AngleDoubleUpIcon,
        AngleDownIcon,
        AngleLeftIcon,
        AngleRightIcon,
        AngleUpIcon,
        AppleIcon,
        ArrowCircleDownIcon,
        ArrowCircleLeftIcon,
        ArrowCircleRightIcon,
        ArrowCircleUpIcon,
        ArrowDownIcon,
        ArrowDownLeftIcon,
        ArrowDownLeftAndArrowUpRightToCenterIcon,
        ArrowDownRightIcon,
        ArrowLeftIcon,
        ArrowRightIcon,
        ArrowRightArrowLeftIcon,
        ArrowsAltIcon,
        ArrowsHIcon,
        ArrowsVIcon,
        ArrowUpIcon,
        ArrowUpLeftIcon,
        ArrowUpRightIcon,
        ArrowUpRightAndArrowDownLeftFromCenterIcon,
        AsteriksIcon,
        AtIcon,
        BackwardIcon,
        BanIcon,
        BarcodeIcon,
        BarsIcon,
        BellIcon,
        BellSlashIcon,
        BitcoinIcon,
        BlankIcon,
        BoltIcon,
        BookIcon,
        BookmarkIcon,
        BookmarkFillIcon,
        BoxIcon,
        BriefcaseIcon,
        BuildingIcon,
        BuildingColumnsIcon,
        BullseyeIcon,
        CalculatorIcon,
        CalendarIcon,
        CalendarClockIcon,
        CalendarMinusIcon,
        CalendarPlusIcon,
        CalendarTimesIcon,
        CameraIcon,
        CarIcon,
        CaretDownIcon,
        CaretLeftIcon,
        CaretRightIcon,
        CaretUpIcon,
        CartArrowDownIcon,
        CartMinusIcon,
        CartPlusIcon,
        ChartBarIcon,
        ChartLineIcon,
        ChartPieIcon,
        ChartScatterIcon,
        CheckIcon,
        CheckCircleIcon,
        CheckSquareIcon,
        ChevronCircleDownIcon,
        ChevronCircleLeftIcon,
        ChevronCircleRightIcon,
        ChevronCircleUpIcon,
        ChevronDownIcon,
        ChevronLeftIcon,
        ChevronRightIcon,
        ChevronUpIcon,
        CircleIcon,
        CircleFillIcon,
        CircleOffIcon,
        CircleOnIcon,
        ClipboardIcon,
        ClockIcon,
        CloneIcon,
        CloudIcon,
        CloudDownloadIcon,
        CloudUploadIcon,
        CodeIcon,
        CogIcon,
        CommentIcon,
        CommentsIcon,
        CompassIcon,
        CopyIcon,
        CreditCardIcon,
        CrownIcon,
        DatabaseIcon,
        DeleteLeftIcon,
        DesktopIcon,
        DirectionsIcon,
        DirectionsAltIcon,
        DiscordIcon,
        DollarIcon,
        DownloadIcon,
        EjectIcon,
        EllipsisHIcon,
        EllipsisVIcon,
        EnvelopeIcon,
        EqualsIcon,
        EraserIcon,
        EthereumIcon,
        EuroIcon,
        ExclamationCircleIcon,
        ExclamationTriangleIcon,
        ExpandIcon,
        ExternalLinkIcon,
        EyeIcon,
        EyeSlashIcon,
        FacebookIcon,
        FaceSmileIcon,
        FastBackwardIcon,
        FastForwardIcon,
        FileIcon,
        FileArrowUpIcon,
        FileCheckIcon,
        FileEditIcon,
        FileExcelIcon,
        FileExportIcon,
        FileImportIcon,
        FileOIcon,
        FilePdfIcon,
        FilePlusIcon,
        FileWordIcon,
        FilterIcon,
        FilterFillIcon,
        FilterSlashIcon,
        FlagIcon,
        FlagFillIcon,
        FolderIcon,
        FolderOpenIcon,
        FolderPlusIcon,
        ForwardIcon,
        GaugeIcon,
        GiftIcon,
        GithubIcon,
        GlobeIcon,
        GoogleIcon,
        GraduationCapIcon,
        HammerIcon,
        HashtagIcon,
        HeadphonesIcon,
        HeartIcon,
        HeartFillIcon,
        HistoryIcon,
        HomeIcon,
        HourglassIcon,
        IdCardIcon,
        ImageIcon,
        ImagesIcon,
        InboxIcon,
        IndianRupeeIcon,
        InfoIcon,
        InfoCircleIcon,
        InstagramIcon,
        KeyIcon,
        LanguageIcon,
        LightbulbIcon,
        LinkIcon,
        LinkedinIcon,
        ListIcon,
        ListCheckIcon,
        LockIcon,
        LockOpenIcon,
        MapIcon,
        MapMarkerIcon,
        MarsIcon,
        MegaphoneIcon,
        MicrochipIcon,
        MicrochipAiIcon,
        MicrophoneIcon,
        MicrosoftIcon,
        MinusIcon,
        MinusCircleIcon,
        MobileIcon,
        MoneyBillIcon,
        MoonIcon,
        ObjectsColumnIcon,
        PaletteIcon,
        PaperclipIcon,
        PauseIcon,
        PauseCircleIcon,
        PaypalIcon,
        PencilIcon,
        PenToSquareIcon,
        PercentageIcon,
        PhoneIcon,
        PinterestIcon,
        PlayIcon,
        PlayCircleIcon,
        PlusIcon,
        PlusCircleIcon,
        PoundIcon,
        PowerOffIcon,
        PrimeIcon,
        PrintIcon,
        QrcodeIcon,
        QuestionIcon,
        QuestionCircleIcon,
        ReceiptIcon,
        RedditIcon,
        RefreshIcon,
        ReplayIcon,
        ReplyIcon,
        SaveIcon,
        SearchIcon,
        SearchMinusIcon,
        SearchPlusIcon,
        SendIcon,
        ServerIcon,
        ShareAltIcon,
        ShieldIcon,
        ShopIcon,
        ShoppingBagIcon,
        ShoppingCartIcon,
        SignInIcon,
        SignOutIcon,
        SitemapIcon,
        SlackIcon,
        SlidersHIcon,
        SlidersVIcon,
        SortIcon,
        SortAlphaAltDownIcon,
        SortAlphaAltUpIcon,
        SortAlphaDownIcon,
        SortAlphaUpIcon,
        SortAltIcon,
        SortAltSlashIcon,
        SortAmountDownIcon,
        SortAmountDownAltIcon,
        SortAmountUpIcon,
        SortAmountUpAltIcon,
        SortDownIcon,
        SortDownFillIcon,
        SortNumericAltDownIcon,
        SortNumericAltUpIcon,
        SortNumericDownIcon,
        SortNumericUpIcon,
        SortUpIcon,
        SortUpFillIcon,
        SparklesIcon,
        SpinnerIcon,
        SpinnerDottedIcon,
        StarIcon,
        StarFillIcon,
        StarHalfIcon,
        StarHalfFillIcon,
        StepBackwardIcon,
        StepBackwardAltIcon,
        StepForwardIcon,
        StepForwardAltIcon,
        StopIcon,
        StopCircleIcon,
        StopwatchIcon,
        SunIcon,
        SyncIcon,
        TableIcon,
        TabletIcon,
        TagIcon,
        TagsIcon,
        TelegramIcon,
        ThLargeIcon,
        ThumbsDownIcon,
        ThumbsDownFillIcon,
        ThumbsUpIcon,
        ThumbsUpFillIcon,
        ThumbtackIcon,
        TicketIcon,
        TiktokIcon,
        TimesIcon,
        TimesCircleIcon,
        TrashIcon,
        TrophyIcon,
        TruckIcon,
        TurkishLiraIcon,
        TwitchIcon,
        TwitterIcon,
        UndoIcon,
        UnlockIcon,
        UploadIcon,
        UserIcon,
        UserEditIcon,
        UserMinusIcon,
        UserPlusIcon,
        UsersIcon,
        VenusIcon,
        VerifiedIcon,
        VideoIcon,
        VimeoIcon,
        VolumeDownIcon,
        VolumeOffIcon,
        VolumeUpIcon,
        WalletIcon,
        WarehouseIcon,
        WavePulseIcon,
        WhatsappIcon,
        WifiIcon,
        WindowMaximizeIcon,
        WindowMinimizeIcon,
        WrenchIcon,
        YoutubeIcon
    ],
    template: `
        <app-docsectiontext>
            <p>PrimeIcons are included in PrimeNG and can be used without any additional installation.</p>
        </app-docsectiontext>
        <div class="card">
            <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2">
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="address-book" class="text-2xl" />
                    <span class="text-xs text-center">addressbook</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="align-center" class="text-2xl" />
                    <span class="text-xs text-center">aligncenter</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="align-justify" class="text-2xl" />
                    <span class="text-xs text-center">alignjustify</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="align-left" class="text-2xl" />
                    <span class="text-xs text-center">alignleft</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="align-right" class="text-2xl" />
                    <span class="text-xs text-center">alignright</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="android" class="text-2xl" />
                    <span class="text-xs text-center">android</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="angle-double-down" class="text-2xl" />
                    <span class="text-xs text-center">angledoubledown</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="angle-double-left" class="text-2xl" />
                    <span class="text-xs text-center">angledoubleleft</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="angle-double-right" class="text-2xl" />
                    <span class="text-xs text-center">angledoubleright</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="angle-double-up" class="text-2xl" />
                    <span class="text-xs text-center">angledoubleup</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="angle-down" class="text-2xl" />
                    <span class="text-xs text-center">angledown</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="angle-left" class="text-2xl" />
                    <span class="text-xs text-center">angleleft</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="angle-right" class="text-2xl" />
                    <span class="text-xs text-center">angleright</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="angle-up" class="text-2xl" />
                    <span class="text-xs text-center">angleup</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="apple" class="text-2xl" />
                    <span class="text-xs text-center">apple</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="arrow-circle-down" class="text-2xl" />
                    <span class="text-xs text-center">arrowcircledown</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="arrow-circle-left" class="text-2xl" />
                    <span class="text-xs text-center">arrowcircleleft</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="arrow-circle-right" class="text-2xl" />
                    <span class="text-xs text-center">arrowcircleright</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="arrow-circle-up" class="text-2xl" />
                    <span class="text-xs text-center">arrowcircleup</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="arrow-down" class="text-2xl" />
                    <span class="text-xs text-center">arrowdown</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="arrow-down-left" class="text-2xl" />
                    <span class="text-xs text-center">arrowdownleft</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="arrow-down-left-and-arrow-up-right-to-center" class="text-2xl" />
                    <span class="text-xs text-center">arrowdownleftandarrowuprighttocenter</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="arrow-down-right" class="text-2xl" />
                    <span class="text-xs text-center">arrowdownright</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="arrow-left" class="text-2xl" />
                    <span class="text-xs text-center">arrowleft</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="arrow-right" class="text-2xl" />
                    <span class="text-xs text-center">arrowright</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="arrow-right-arrow-left" class="text-2xl" />
                    <span class="text-xs text-center">arrowrightarrowleft</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="arrows-alt" class="text-2xl" />
                    <span class="text-xs text-center">arrowsalt</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="arrows-h" class="text-2xl" />
                    <span class="text-xs text-center">arrowsh</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="arrows-v" class="text-2xl" />
                    <span class="text-xs text-center">arrowsv</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="arrow-up" class="text-2xl" />
                    <span class="text-xs text-center">arrowup</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="arrow-up-left" class="text-2xl" />
                    <span class="text-xs text-center">arrowupleft</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="arrow-up-right" class="text-2xl" />
                    <span class="text-xs text-center">arrowupright</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="arrow-up-right-and-arrow-down-left-from-center" class="text-2xl" />
                    <span class="text-xs text-center">arrowuprightandarrowdownleftfromcenter</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="asteriks" class="text-2xl" />
                    <span class="text-xs text-center">asteriks</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="at" class="text-2xl" />
                    <span class="text-xs text-center">at</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="backward" class="text-2xl" />
                    <span class="text-xs text-center">backward</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="ban" class="text-2xl" />
                    <span class="text-xs text-center">ban</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="barcode" class="text-2xl" />
                    <span class="text-xs text-center">barcode</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="bars" class="text-2xl" />
                    <span class="text-xs text-center">bars</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="bell" class="text-2xl" />
                    <span class="text-xs text-center">bell</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="bell-slash" class="text-2xl" />
                    <span class="text-xs text-center">bellslash</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="bitcoin" class="text-2xl" />
                    <span class="text-xs text-center">bitcoin</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="blank" class="text-2xl" />
                    <span class="text-xs text-center">blank</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="bolt" class="text-2xl" />
                    <span class="text-xs text-center">bolt</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="book" class="text-2xl" />
                    <span class="text-xs text-center">book</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="bookmark" class="text-2xl" />
                    <span class="text-xs text-center">bookmark</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="bookmark-fill" class="text-2xl" />
                    <span class="text-xs text-center">bookmarkfill</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="box" class="text-2xl" />
                    <span class="text-xs text-center">box</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="briefcase" class="text-2xl" />
                    <span class="text-xs text-center">briefcase</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="building" class="text-2xl" />
                    <span class="text-xs text-center">building</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="building-columns" class="text-2xl" />
                    <span class="text-xs text-center">buildingcolumns</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="bullseye" class="text-2xl" />
                    <span class="text-xs text-center">bullseye</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="calculator" class="text-2xl" />
                    <span class="text-xs text-center">calculator</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="calendar" class="text-2xl" />
                    <span class="text-xs text-center">calendar</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="calendar-clock" class="text-2xl" />
                    <span class="text-xs text-center">calendarclock</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="calendar-minus" class="text-2xl" />
                    <span class="text-xs text-center">calendarminus</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="calendar-plus" class="text-2xl" />
                    <span class="text-xs text-center">calendarplus</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="calendar-times" class="text-2xl" />
                    <span class="text-xs text-center">calendartimes</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="camera" class="text-2xl" />
                    <span class="text-xs text-center">camera</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="car" class="text-2xl" />
                    <span class="text-xs text-center">car</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="caret-down" class="text-2xl" />
                    <span class="text-xs text-center">caretdown</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="caret-left" class="text-2xl" />
                    <span class="text-xs text-center">caretleft</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="caret-right" class="text-2xl" />
                    <span class="text-xs text-center">caretright</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="caret-up" class="text-2xl" />
                    <span class="text-xs text-center">caretup</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="cart-arrow-down" class="text-2xl" />
                    <span class="text-xs text-center">cartarrowdown</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="cart-minus" class="text-2xl" />
                    <span class="text-xs text-center">cartminus</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="cart-plus" class="text-2xl" />
                    <span class="text-xs text-center">cartplus</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="chart-bar" class="text-2xl" />
                    <span class="text-xs text-center">chartbar</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="chart-line" class="text-2xl" />
                    <span class="text-xs text-center">chartline</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="chart-pie" class="text-2xl" />
                    <span class="text-xs text-center">chartpie</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="chart-scatter" class="text-2xl" />
                    <span class="text-xs text-center">chartscatter</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="check" class="text-2xl" />
                    <span class="text-xs text-center">check</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="check-circle" class="text-2xl" />
                    <span class="text-xs text-center">checkcircle</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="check-square" class="text-2xl" />
                    <span class="text-xs text-center">checksquare</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="chevron-circle-down" class="text-2xl" />
                    <span class="text-xs text-center">chevroncircledown</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="chevron-circle-left" class="text-2xl" />
                    <span class="text-xs text-center">chevroncircleleft</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="chevron-circle-right" class="text-2xl" />
                    <span class="text-xs text-center">chevroncircleright</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="chevron-circle-up" class="text-2xl" />
                    <span class="text-xs text-center">chevroncircleup</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="chevron-down" class="text-2xl" />
                    <span class="text-xs text-center">chevrondown</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="chevron-left" class="text-2xl" />
                    <span class="text-xs text-center">chevronleft</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="chevron-right" class="text-2xl" />
                    <span class="text-xs text-center">chevronright</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="chevron-up" class="text-2xl" />
                    <span class="text-xs text-center">chevronup</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="circle" class="text-2xl" />
                    <span class="text-xs text-center">circle</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="circle-fill" class="text-2xl" />
                    <span class="text-xs text-center">circlefill</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="circle-off" class="text-2xl" />
                    <span class="text-xs text-center">circleoff</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="circle-on" class="text-2xl" />
                    <span class="text-xs text-center">circleon</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="clipboard" class="text-2xl" />
                    <span class="text-xs text-center">clipboard</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="clock" class="text-2xl" />
                    <span class="text-xs text-center">clock</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="clone" class="text-2xl" />
                    <span class="text-xs text-center">clone</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="cloud" class="text-2xl" />
                    <span class="text-xs text-center">cloud</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="cloud-download" class="text-2xl" />
                    <span class="text-xs text-center">clouddownload</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="cloud-upload" class="text-2xl" />
                    <span class="text-xs text-center">cloudupload</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="code" class="text-2xl" />
                    <span class="text-xs text-center">code</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="cog" class="text-2xl" />
                    <span class="text-xs text-center">cog</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="comment" class="text-2xl" />
                    <span class="text-xs text-center">comment</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="comments" class="text-2xl" />
                    <span class="text-xs text-center">comments</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="compass" class="text-2xl" />
                    <span class="text-xs text-center">compass</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="copy" class="text-2xl" />
                    <span class="text-xs text-center">copy</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="credit-card" class="text-2xl" />
                    <span class="text-xs text-center">creditcard</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="crown" class="text-2xl" />
                    <span class="text-xs text-center">crown</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="database" class="text-2xl" />
                    <span class="text-xs text-center">database</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="delete-left" class="text-2xl" />
                    <span class="text-xs text-center">deleteleft</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="desktop" class="text-2xl" />
                    <span class="text-xs text-center">desktop</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="directions" class="text-2xl" />
                    <span class="text-xs text-center">directions</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="directions-alt" class="text-2xl" />
                    <span class="text-xs text-center">directionsalt</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="discord" class="text-2xl" />
                    <span class="text-xs text-center">discord</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="dollar" class="text-2xl" />
                    <span class="text-xs text-center">dollar</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="download" class="text-2xl" />
                    <span class="text-xs text-center">download</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="eject" class="text-2xl" />
                    <span class="text-xs text-center">eject</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="ellipsis-h" class="text-2xl" />
                    <span class="text-xs text-center">ellipsish</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="ellipsis-v" class="text-2xl" />
                    <span class="text-xs text-center">ellipsisv</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="envelope" class="text-2xl" />
                    <span class="text-xs text-center">envelope</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="equals" class="text-2xl" />
                    <span class="text-xs text-center">equals</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="eraser" class="text-2xl" />
                    <span class="text-xs text-center">eraser</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="ethereum" class="text-2xl" />
                    <span class="text-xs text-center">ethereum</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="euro" class="text-2xl" />
                    <span class="text-xs text-center">euro</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="exclamation-circle" class="text-2xl" />
                    <span class="text-xs text-center">exclamationcircle</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="exclamation-triangle" class="text-2xl" />
                    <span class="text-xs text-center">exclamationtriangle</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="expand" class="text-2xl" />
                    <span class="text-xs text-center">expand</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="external-link" class="text-2xl" />
                    <span class="text-xs text-center">externallink</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="eye" class="text-2xl" />
                    <span class="text-xs text-center">eye</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="eye-slash" class="text-2xl" />
                    <span class="text-xs text-center">eyeslash</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="facebook" class="text-2xl" />
                    <span class="text-xs text-center">facebook</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="face-smile" class="text-2xl" />
                    <span class="text-xs text-center">facesmile</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="fast-backward" class="text-2xl" />
                    <span class="text-xs text-center">fastbackward</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="fast-forward" class="text-2xl" />
                    <span class="text-xs text-center">fastforward</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="file" class="text-2xl" />
                    <span class="text-xs text-center">file</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="file-arrow-up" class="text-2xl" />
                    <span class="text-xs text-center">filearrowup</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="file-check" class="text-2xl" />
                    <span class="text-xs text-center">filecheck</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="file-edit" class="text-2xl" />
                    <span class="text-xs text-center">fileedit</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="file-excel" class="text-2xl" />
                    <span class="text-xs text-center">fileexcel</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="file-export" class="text-2xl" />
                    <span class="text-xs text-center">fileexport</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="file-import" class="text-2xl" />
                    <span class="text-xs text-center">fileimport</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="file-o" class="text-2xl" />
                    <span class="text-xs text-center">fileo</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="file-pdf" class="text-2xl" />
                    <span class="text-xs text-center">filepdf</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="file-plus" class="text-2xl" />
                    <span class="text-xs text-center">fileplus</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="file-word" class="text-2xl" />
                    <span class="text-xs text-center">fileword</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="filter" class="text-2xl" />
                    <span class="text-xs text-center">filter</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="filter-fill" class="text-2xl" />
                    <span class="text-xs text-center">filterfill</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="filter-slash" class="text-2xl" />
                    <span class="text-xs text-center">filterslash</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="flag" class="text-2xl" />
                    <span class="text-xs text-center">flag</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="flag-fill" class="text-2xl" />
                    <span class="text-xs text-center">flagfill</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="folder" class="text-2xl" />
                    <span class="text-xs text-center">folder</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="folder-open" class="text-2xl" />
                    <span class="text-xs text-center">folderopen</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="folder-plus" class="text-2xl" />
                    <span class="text-xs text-center">folderplus</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="forward" class="text-2xl" />
                    <span class="text-xs text-center">forward</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="gauge" class="text-2xl" />
                    <span class="text-xs text-center">gauge</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="gift" class="text-2xl" />
                    <span class="text-xs text-center">gift</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="github" class="text-2xl" />
                    <span class="text-xs text-center">github</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="globe" class="text-2xl" />
                    <span class="text-xs text-center">globe</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="google" class="text-2xl" />
                    <span class="text-xs text-center">google</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="graduation-cap" class="text-2xl" />
                    <span class="text-xs text-center">graduationcap</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="hammer" class="text-2xl" />
                    <span class="text-xs text-center">hammer</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="hashtag" class="text-2xl" />
                    <span class="text-xs text-center">hashtag</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="headphones" class="text-2xl" />
                    <span class="text-xs text-center">headphones</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="heart" class="text-2xl" />
                    <span class="text-xs text-center">heart</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="heart-fill" class="text-2xl" />
                    <span class="text-xs text-center">heartfill</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="history" class="text-2xl" />
                    <span class="text-xs text-center">history</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="home" class="text-2xl" />
                    <span class="text-xs text-center">home</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="hourglass" class="text-2xl" />
                    <span class="text-xs text-center">hourglass</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="id-card" class="text-2xl" />
                    <span class="text-xs text-center">idcard</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="image" class="text-2xl" />
                    <span class="text-xs text-center">image</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="images" class="text-2xl" />
                    <span class="text-xs text-center">images</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="inbox" class="text-2xl" />
                    <span class="text-xs text-center">inbox</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="indian-rupee" class="text-2xl" />
                    <span class="text-xs text-center">indianrupee</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="info" class="text-2xl" />
                    <span class="text-xs text-center">info</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="info-circle" class="text-2xl" />
                    <span class="text-xs text-center">infocircle</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="instagram" class="text-2xl" />
                    <span class="text-xs text-center">instagram</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="key" class="text-2xl" />
                    <span class="text-xs text-center">key</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="language" class="text-2xl" />
                    <span class="text-xs text-center">language</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="lightbulb" class="text-2xl" />
                    <span class="text-xs text-center">lightbulb</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="link" class="text-2xl" />
                    <span class="text-xs text-center">link</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="linkedin" class="text-2xl" />
                    <span class="text-xs text-center">linkedin</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="list" class="text-2xl" />
                    <span class="text-xs text-center">list</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="list-check" class="text-2xl" />
                    <span class="text-xs text-center">listcheck</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="lock" class="text-2xl" />
                    <span class="text-xs text-center">lock</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="lock-open" class="text-2xl" />
                    <span class="text-xs text-center">lockopen</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="map" class="text-2xl" />
                    <span class="text-xs text-center">map</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="map-marker" class="text-2xl" />
                    <span class="text-xs text-center">mapmarker</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="mars" class="text-2xl" />
                    <span class="text-xs text-center">mars</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="megaphone" class="text-2xl" />
                    <span class="text-xs text-center">megaphone</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="microchip" class="text-2xl" />
                    <span class="text-xs text-center">microchip</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="microchip-ai" class="text-2xl" />
                    <span class="text-xs text-center">microchipai</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="microphone" class="text-2xl" />
                    <span class="text-xs text-center">microphone</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="microsoft" class="text-2xl" />
                    <span class="text-xs text-center">microsoft</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="minus" class="text-2xl" />
                    <span class="text-xs text-center">minus</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="minus-circle" class="text-2xl" />
                    <span class="text-xs text-center">minuscircle</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="mobile" class="text-2xl" />
                    <span class="text-xs text-center">mobile</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="money-bill" class="text-2xl" />
                    <span class="text-xs text-center">moneybill</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="moon" class="text-2xl" />
                    <span class="text-xs text-center">moon</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="objects-column" class="text-2xl" />
                    <span class="text-xs text-center">objectscolumn</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="palette" class="text-2xl" />
                    <span class="text-xs text-center">palette</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="paperclip" class="text-2xl" />
                    <span class="text-xs text-center">paperclip</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="pause" class="text-2xl" />
                    <span class="text-xs text-center">pause</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="pause-circle" class="text-2xl" />
                    <span class="text-xs text-center">pausecircle</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="paypal" class="text-2xl" />
                    <span class="text-xs text-center">paypal</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="pencil" class="text-2xl" />
                    <span class="text-xs text-center">pencil</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="pen-to-square" class="text-2xl" />
                    <span class="text-xs text-center">pentosquare</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="percentage" class="text-2xl" />
                    <span class="text-xs text-center">percentage</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="phone" class="text-2xl" />
                    <span class="text-xs text-center">phone</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="pinterest" class="text-2xl" />
                    <span class="text-xs text-center">pinterest</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="play" class="text-2xl" />
                    <span class="text-xs text-center">play</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="play-circle" class="text-2xl" />
                    <span class="text-xs text-center">playcircle</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="plus" class="text-2xl" />
                    <span class="text-xs text-center">plus</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="plus-circle" class="text-2xl" />
                    <span class="text-xs text-center">pluscircle</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="pound" class="text-2xl" />
                    <span class="text-xs text-center">pound</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="power-off" class="text-2xl" />
                    <span class="text-xs text-center">poweroff</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="prime" class="text-2xl" />
                    <span class="text-xs text-center">prime</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="print" class="text-2xl" />
                    <span class="text-xs text-center">print</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="qrcode" class="text-2xl" />
                    <span class="text-xs text-center">qrcode</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="question" class="text-2xl" />
                    <span class="text-xs text-center">question</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="question-circle" class="text-2xl" />
                    <span class="text-xs text-center">questioncircle</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="receipt" class="text-2xl" />
                    <span class="text-xs text-center">receipt</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="reddit" class="text-2xl" />
                    <span class="text-xs text-center">reddit</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="refresh" class="text-2xl" />
                    <span class="text-xs text-center">refresh</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="replay" class="text-2xl" />
                    <span class="text-xs text-center">replay</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="reply" class="text-2xl" />
                    <span class="text-xs text-center">reply</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="save" class="text-2xl" />
                    <span class="text-xs text-center">save</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="search" class="text-2xl" />
                    <span class="text-xs text-center">search</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="search-minus" class="text-2xl" />
                    <span class="text-xs text-center">searchminus</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="search-plus" class="text-2xl" />
                    <span class="text-xs text-center">searchplus</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="send" class="text-2xl" />
                    <span class="text-xs text-center">send</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="server" class="text-2xl" />
                    <span class="text-xs text-center">server</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="share-alt" class="text-2xl" />
                    <span class="text-xs text-center">sharealt</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="shield" class="text-2xl" />
                    <span class="text-xs text-center">shield</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="shop" class="text-2xl" />
                    <span class="text-xs text-center">shop</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="shopping-bag" class="text-2xl" />
                    <span class="text-xs text-center">shoppingbag</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="shopping-cart" class="text-2xl" />
                    <span class="text-xs text-center">shoppingcart</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sign-in" class="text-2xl" />
                    <span class="text-xs text-center">signin</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sign-out" class="text-2xl" />
                    <span class="text-xs text-center">signout</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sitemap" class="text-2xl" />
                    <span class="text-xs text-center">sitemap</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="slack" class="text-2xl" />
                    <span class="text-xs text-center">slack</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sliders-h" class="text-2xl" />
                    <span class="text-xs text-center">slidersh</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sliders-v" class="text-2xl" />
                    <span class="text-xs text-center">slidersv</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sort" class="text-2xl" />
                    <span class="text-xs text-center">sort</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sort-alpha-alt-down" class="text-2xl" />
                    <span class="text-xs text-center">sortalphaaltdown</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sort-alpha-alt-up" class="text-2xl" />
                    <span class="text-xs text-center">sortalphaaltup</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sort-alpha-down" class="text-2xl" />
                    <span class="text-xs text-center">sortalphadown</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sort-alpha-up" class="text-2xl" />
                    <span class="text-xs text-center">sortalphaup</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sort-alt" class="text-2xl" />
                    <span class="text-xs text-center">sortalt</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sort-alt-slash" class="text-2xl" />
                    <span class="text-xs text-center">sortaltslash</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sort-amount-down" class="text-2xl" />
                    <span class="text-xs text-center">sortamountdown</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sort-amount-down-alt" class="text-2xl" />
                    <span class="text-xs text-center">sortamountdownalt</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sort-amount-up" class="text-2xl" />
                    <span class="text-xs text-center">sortamountup</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sort-amount-up-alt" class="text-2xl" />
                    <span class="text-xs text-center">sortamountupalt</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sort-down" class="text-2xl" />
                    <span class="text-xs text-center">sortdown</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sort-down-fill" class="text-2xl" />
                    <span class="text-xs text-center">sortdownfill</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sort-numeric-alt-down" class="text-2xl" />
                    <span class="text-xs text-center">sortnumericaltdown</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sort-numeric-alt-up" class="text-2xl" />
                    <span class="text-xs text-center">sortnumericaltup</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sort-numeric-down" class="text-2xl" />
                    <span class="text-xs text-center">sortnumericdown</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sort-numeric-up" class="text-2xl" />
                    <span class="text-xs text-center">sortnumericup</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sort-up" class="text-2xl" />
                    <span class="text-xs text-center">sortup</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sort-up-fill" class="text-2xl" />
                    <span class="text-xs text-center">sortupfill</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sparkles" class="text-2xl" />
                    <span class="text-xs text-center">sparkles</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="spinner" class="text-2xl" />
                    <span class="text-xs text-center">spinner</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="spinner-dotted" class="text-2xl" />
                    <span class="text-xs text-center">spinnerdotted</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="star" class="text-2xl" />
                    <span class="text-xs text-center">star</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="star-fill" class="text-2xl" />
                    <span class="text-xs text-center">starfill</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="star-half" class="text-2xl" />
                    <span class="text-xs text-center">starhalf</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="star-half-fill" class="text-2xl" />
                    <span class="text-xs text-center">starhalffill</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="step-backward" class="text-2xl" />
                    <span class="text-xs text-center">stepbackward</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="step-backward-alt" class="text-2xl" />
                    <span class="text-xs text-center">stepbackwardalt</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="step-forward" class="text-2xl" />
                    <span class="text-xs text-center">stepforward</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="step-forward-alt" class="text-2xl" />
                    <span class="text-xs text-center">stepforwardalt</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="stop" class="text-2xl" />
                    <span class="text-xs text-center">stop</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="stop-circle" class="text-2xl" />
                    <span class="text-xs text-center">stopcircle</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="stopwatch" class="text-2xl" />
                    <span class="text-xs text-center">stopwatch</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sun" class="text-2xl" />
                    <span class="text-xs text-center">sun</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="sync" class="text-2xl" />
                    <span class="text-xs text-center">sync</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="table" class="text-2xl" />
                    <span class="text-xs text-center">table</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="tablet" class="text-2xl" />
                    <span class="text-xs text-center">tablet</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="tag" class="text-2xl" />
                    <span class="text-xs text-center">tag</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="tags" class="text-2xl" />
                    <span class="text-xs text-center">tags</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="telegram" class="text-2xl" />
                    <span class="text-xs text-center">telegram</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="th-large" class="text-2xl" />
                    <span class="text-xs text-center">thlarge</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="thumbs-down" class="text-2xl" />
                    <span class="text-xs text-center">thumbsdown</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="thumbs-down-fill" class="text-2xl" />
                    <span class="text-xs text-center">thumbsdownfill</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="thumbs-up" class="text-2xl" />
                    <span class="text-xs text-center">thumbsup</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="thumbs-up-fill" class="text-2xl" />
                    <span class="text-xs text-center">thumbsupfill</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="thumbtack" class="text-2xl" />
                    <span class="text-xs text-center">thumbtack</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="ticket" class="text-2xl" />
                    <span class="text-xs text-center">ticket</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="tiktok" class="text-2xl" />
                    <span class="text-xs text-center">tiktok</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="times" class="text-2xl" />
                    <span class="text-xs text-center">times</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="times-circle" class="text-2xl" />
                    <span class="text-xs text-center">timescircle</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="trash" class="text-2xl" />
                    <span class="text-xs text-center">trash</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="trophy" class="text-2xl" />
                    <span class="text-xs text-center">trophy</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="truck" class="text-2xl" />
                    <span class="text-xs text-center">truck</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="turkish-lira" class="text-2xl" />
                    <span class="text-xs text-center">turkishlira</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="twitch" class="text-2xl" />
                    <span class="text-xs text-center">twitch</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="twitter" class="text-2xl" />
                    <span class="text-xs text-center">twitter</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="undo" class="text-2xl" />
                    <span class="text-xs text-center">undo</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="unlock" class="text-2xl" />
                    <span class="text-xs text-center">unlock</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="upload" class="text-2xl" />
                    <span class="text-xs text-center">upload</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="user" class="text-2xl" />
                    <span class="text-xs text-center">user</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="user-edit" class="text-2xl" />
                    <span class="text-xs text-center">useredit</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="user-minus" class="text-2xl" />
                    <span class="text-xs text-center">userminus</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="user-plus" class="text-2xl" />
                    <span class="text-xs text-center">userplus</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="users" class="text-2xl" />
                    <span class="text-xs text-center">users</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="venus" class="text-2xl" />
                    <span class="text-xs text-center">venus</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="verified" class="text-2xl" />
                    <span class="text-xs text-center">verified</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="video" class="text-2xl" />
                    <span class="text-xs text-center">video</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="vimeo" class="text-2xl" />
                    <span class="text-xs text-center">vimeo</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="volume-down" class="text-2xl" />
                    <span class="text-xs text-center">volumedown</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="volume-off" class="text-2xl" />
                    <span class="text-xs text-center">volumeoff</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="volume-up" class="text-2xl" />
                    <span class="text-xs text-center">volumeup</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="wallet" class="text-2xl" />
                    <span class="text-xs text-center">wallet</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="warehouse" class="text-2xl" />
                    <span class="text-xs text-center">warehouse</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="wave-pulse" class="text-2xl" />
                    <span class="text-xs text-center">wavepulse</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="whatsapp" class="text-2xl" />
                    <span class="text-xs text-center">whatsapp</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="wifi" class="text-2xl" />
                    <span class="text-xs text-center">wifi</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="window-maximize" class="text-2xl" />
                    <span class="text-xs text-center">windowmaximize</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="window-minimize" class="text-2xl" />
                    <span class="text-xs text-center">windowminimize</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="wrench" class="text-2xl" />
                    <span class="text-xs text-center">wrench</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-2 w-20">
                    <svg data-p-icon="youtube" class="text-2xl" />
                    <span class="text-xs text-center">youtube</span>
                </div>
            </div>
        </div>
    `
})
export class BuiltInPrimeIconsDoc {}
