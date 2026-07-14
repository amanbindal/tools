    const tickers = [
      'A', 'AA', 'AAL', 'AAOI', 'AAON', 'AAP', 'AAPL', 'AAT', 'ABBV', 'ABCB', 'ABCL',
      'ABCM', 'ABEO', 'ABG', 'ABM', 'ABNB', 'ABOS', 'ABR', 'ABSI', 'ABT', 'ABUS', 'ACA', 'ACAD',
      'ACCO', 'ACDC', 'ACEL', 'ACGL', 'ACHC', 'ACHR', 'ACI', 'ACIC', 'ACIW', 'ACLS', 'ACLX', 'ACM',
      'ACMR', 'ACN', 'ACNB', 'ACRE', 'ACT', 'ACTG', 'ACU', 'ACVA', 'ADAP', 'ADBE', 'ADC', 'ADCT',
      'ADEA', 'ADI', 'ADM', 'ADMA', 'ADMP', 'ADN', 'ADNT', 'ADP', 'ADPT', 'ADSK',
      'ADT', 'ADTN', 'ADUS', 'ADV', 'ADVM', 'ADXN', 'AE', 'AEE', 'AEHR', 'AEIS',
      'AEM', 'AEO', 'AEP', 'AES', 'AESI', 'AEVA', 'AEY', 'AFCG', 'AFG', 'AFL', 'AFRM',
      'AFYA', 'AG', 'AGCO', 'AGEN', 'AGI', 'AGIO', 'AGL', 'AGLE', 'AGM', 'AGNC', 'AGO', 'AGR',
      'AGRI', 'AGRO', 'AGS', 'AGTI', 'AGX', 'AGYS', 'AHCO', 'AHG', 'AHH', 'AHI', 'AI', 'AIG',
      'AIHS', 'AIN', 'AINC', 'AIO', 'AIP', 'AIR', 'AIRE', 'AIRG', 'AIRI', 'AIRR', 'AIRT', 'AIT',
      'AIV', 'AIZ', 'AJG', 'AKAM', 'AKBA', 'AKRO', 'AKTS', 'AL', 'ALAB', 'ALB', 'ALBO', 'ALC',
      'ALCO', 'ALDX', 'ALE', 'ALEC', 'ALEX', 'ALG', 'ALGM', 'ALGN', 'ALGS', 'ALGT', 'ALHC', 'ALIT',
      'ALK', 'ALKS', 'ALKT', 'ALL', 'ALLE', 'ALLO', 'ALLY', 'ALMS', 'ALNT', 'ALNY', 'ALPN', 'ALR',
      'ALRM', 'ALRS', 'ALSN', 'ALTG', 'ALTR', 'ALTU', 'ALV', 'ALVR', 'ALX', 'ALXO',
      'AM', 'AMAL', 'AMAT', 'AMBA', 'AMBC', 'AMBP', 'AMC', 'AMCR', 'AMCX', 'AMD', 'AME', 'AMED',
      'AMG', 'AMGN', 'AMH', 'AMK', 'AMKR', 'AMLP', 'AMN', 'AMP', 'AMPH', 'AMPL', 'AMPS',
      'AMR', 'AMRC', 'AMRK', 'AMRX', 'AMS', 'AMSC', 'AMSF', 'AMT', 'AMTB', 'AMTM', 'AMWD', 'AMX',
      'AMZN', 'AN', 'ANAB', 'ANDE', 'ANET', 'ANF', 'ANGI', 'ANGO', 'ANIK', 'ANIP',
      'ANNX', 'ANSS', 'AON', 'AORT', 'AOS', 'AOSL', 'APA', 'APAM', 'APD', 'APG',
      'APGE', 'APH', 'APLD', 'APLE', 'APLS', 'APLT', 'APO', 'APOG', 'APP', 'APPF', 'APPH', 'APPN',
      'APPS', 'APTV', 'AQST', 'AR', 'ARAY', 'ARCC', 'ARCB', 'ARCT', 'ARCO', 'ARDT', 'ARDX', 'ARE',
      'ARES', 'ARGD', 'ARGX', 'ARI', 'ARIS', 'ARKO', 'ARLO', 'ARLP', 'ARM', 'ARMK', 'ARNC', 'AROC',
      'AROW', 'ARQT', 'ARR', 'ARRY', 'ARVN', 'ARW', 'ARWR', 'AS', 'ASAI', 'ASAN', 'ASB', 'ASC',
      'ASGN', 'ASH', 'ASIX', 'ASLE', 'ASMB', 'ASML', 'ASO', 'ASPN', 'ASPS', 'ASR', 'ASTC', 'ASTH',
      'ASTL', 'ASTS', 'ASUR', 'ATAT', 'ATEC', 'ATEN', 'ATEX', 'ATGE', 'ATI', 'ATKR', 'ATLC', 'ATMU',
      'ATNI', 'ATO', 'ATR', 'ATRA', 'ATRC', 'ATRO', 'ATSG', 'ATUS', 'ATXS', 'ATYR', 'AU', 'AUB',
      'AUPH', 'AUR', 'AURA', 'AVA', 'AVAV', 'AVB', 'AVBP', 'AVD', 'AVDL', 'AVDX', 'AVGO', 'AVIR',
      'AVNS', 'AVNT', 'AVNW', 'AVO', 'AVPT', 'AVT', 'AVTR', 'AVXL', 'AVY', 'AWF', 'AWK', 'AWI',
      'AWR', 'AX', 'AXGN', 'AXL', 'AXON', 'AXP', 'AXS', 'AXSM', 'AXTA', 'AY', 'AYI', 'AZO',
      'AZTA', 'AZZ', 'B', 'BA', 'BABA', 'BAC', 'BAH', 'BALL', 'BAM', 'BANC', 'BAND', 'BANF',
      'BANR', 'BASE', 'BAX', 'BBAI', 'BBIO', 'BBSI', 'BBW', 'BBWI', 'BBY', 'BC',
      'BCAX', 'BCBP', 'BCC', 'BCML', 'BCO', 'BCPC', 'BCRX', 'BDC', 'BDN', 'BDX', 'BE', 'BEAM',
      'BEKE', 'BEN', 'BEPC', 'BFAM', 'BFH', 'BFS', 'BFST', 'BG', 'BGC',
      'BGS', 'BHB', 'BHE', 'BHF', 'BHR', 'BHVN', 'BIGC', 'BIIB', 'BILI', 'BILL', 'BIO', 'BIPC',
      'BIRK', 'BJ', 'BJRI', 'BK', 'BKD', 'BKE', 'BKH', 'BKNG', 'BKR', 'BKU', 'BL', 'BLBD',
      'BLD', 'BLDE', 'BLDR', 'BLFS', 'BLFY', 'BLK', 'BLKB', 'BLMN', 'BLND', 'BLNK', 'BLPH', 'BLRX',
      'BLU', 'BMBL', 'BMEA', 'BMI', 'BMRC', 'BMRN', 'BMY', 'BNL', 'BNS', 'BOC', 'BOH',
      'BOKF', 'BOOM', 'BOOT', 'BORR', 'BOX', 'BPMC', 'BPOP', 'BR', 'BRBR', 'BRCC', 'BRC',
      'BRFS', 'BRKL', 'BRKR', 'BRO', 'BROS', 'BRSP', 'BRX', 'BRY', 'BRZE', 'BSRR', 'BSX',
      'BSY', 'BTBT', 'BTDR', 'BTSG', 'BTU', 'BUR', 'BURL', 'BUSE', 'BV', 'BVS', 'BWA', 'BWB',
      'BWIN', 'BWMN', 'BWXT', 'BX', 'BXC', 'BXMT', 'BXP', 'BY', 'BYD', 'BYND', 'BYON', 'BYRN',
      'BZH', 'C', 'CABA', 'CAC', 'CACC', 'CACI', 'CADE', 'CAG', 'CAH', 'CAKE', 'CAL', 'CALM',
      'CALX', 'CAMT', 'CAPR', 'CAR', 'CARE', 'CARG', 'CARR', 'CARS', 'CART', 'CASH', 'CASS', 'CASY',
      'CAT', 'CATX', 'CATY', 'CAVA', 'CB', 'CBAN', 'CBL', 'CBLL', 'CBAY', 'CBOE', 'CBRE',
      'CBRL', 'CBSH', 'CBT', 'CBU', 'CBZ', 'CC', 'CCB', 'CCBG', 'CCCC', 'CCCS', 'CCI', 'CCJ',
      'CCK', 'CCL', 'CCNE', 'CCO', 'CCOI', 'CCRN', 'CDAY', 'CDE', 'CDLX', 'CDNA',
      'CDNS', 'CDP', 'CDRE', 'CDTX', 'CDW', 'CDXS', 'CE', 'CECO', 'CEG', 'CELC', 'CELH', 'CENT',
      'CENX', 'CERS', 'CERT', 'CEVA', 'CF', 'CFFN', 'CFG', 'CFLT', 'CFR', 'CG', 'CGEM',
      'CGNX', 'CGON', 'CHCI', 'CHCO', 'CHCT', 'CHD', 'CHDN', 'CHEF', 'CHE', 'CHGG', 'CHH', 'CHKP',
      'CHRD', 'CHRS', 'CHRW', 'CHS', 'CHTR', 'CHWY', 'CHX', 'CI', 'CIEN', 'CIFR', 'CIM', 'CINF',
      'CIO', 'CIVB', 'CIVI', 'CIX', 'CL', 'CLAR', 'CLBT', 'CLDT', 'CLDX', 'CLEU', 'CLF',
      'CLFD', 'CLH', 'CLMT', 'CLNE', 'CLOV', 'CLPR', 'CLS', 'CLSK', 'CLVT', 'CLW', 'CLX', 'CM',
      'CMA', 'CMBM', 'CMCL', 'CMCO', 'CMCSA', 'CME', 'CMI', 'CMG', 'CMPO', 'CMPR', 'CMPX', 'CMRE',
      'CMS', 'CMTG', 'CNA', 'CNC', 'CNDT', 'CNF', 'CNH', 'CNI', 'CNK', 'CNM', 'CNMD',
      'CNNE', 'CNO', 'CNOB', 'CNP', 'CNQ', 'CNR', 'CNS', 'CNTA', 'CNX', 'CNXC', 'CNXN', 'COCO',
      'COF', 'COGT', 'COHR', 'COHU', 'COIN', 'COKE', 'COLB', 'COLD', 'COLL', 'COLM', 'COMM', 'COMP',
      'CON', 'COO', 'COOP', 'COP', 'COR', 'CORT', 'CORZ', 'COST', 'COTY', 'COUR', 'CPAY', 'CPB',
      'CPF', 'CPK', 'CPNG', 'CPRI', 'CPRT', 'CPRX', 'CPS', 'CPT', 'CR', 'CRBP', 'CRBU', 'CRC',
      'CRCT', 'CRDO', 'CRGX', 'CRGY', 'CRH', 'CRI', 'CRK', 'CRM', 'CRMD', 'CRNC', 'CRNX', 'CROX',
      'CRS', 'CRSP', 'CRSR', 'CRUS', 'CRVL', 'CRWD', 'CRWV', 'CSCO', 'CSGP', 'CSGS', 'CSL',
      'CSQ', 'CSTE', 'CSV', 'CSW', 'CSWI', 'CSX', 'CTAS', 'CTBI',
      'CTKB', 'CTLP', 'CTO', 'CTOS', 'CTRA', 'CTRE', 'CTRI', 'CTS', 'CTSH', 'CTVA', 'CTXR', 'CUBE',
      'CUBI', 'CUK', 'CUZ', 'CVAC', 'CVBF', 'CVCO', 'CVGW', 'CVI', 'CVLG', 'CVLT', 'CVNA', 'CVRX',
      'CVS', 'CVX', 'CW', 'CWAN', 'CWBC', 'CWCO', 'CWEN', 'CWH', 'CWK', 'CWST', 'CWT',
      'CXM', 'CXT', 'CXW', 'CYBR', 'CYH', 'CYRX', 'CYTK', 'CZNC', 'CZR', 'D', 'DAKT',
      'DAL', 'DAN', 'DAR', 'DASH', 'DAVE', 'DAWN', 'DAY', 'DBD', 'DBI', 'DBRG', 'DBX', 'DCGO',
      'DCI', 'DCO', 'DCOM', 'DD', 'DDD', 'DDOG', 'DE', 'DEA', 'DECK', 'DEI', 'DELL', 'DEMZ',
      'DENN', 'DFH', 'DFIN', 'DG', 'DGII', 'DGX', 'DH', 'DHC', 'DHI', 'DHR', 'DHT',
      'DIA', 'DIN', 'DINO', 'DIOD', 'DIS', 'DJT', 'DK', 'DKL', 'DKNG', 'DKS', 'DLA',
      'DLB', 'DLR', 'DLTR', 'DLX', 'DM', 'DMRC', 'DMLP', 'DNB', 'DNLI', 'DNOW', 'DNN',
      'DNUT', 'DO', 'DOC', 'DOCN', 'DOCS', 'DOCU', 'DOLE', 'DOMA', 'DOMO', 'DOOR', 'DORM', 'DOV',
      'DOW', 'DOX', 'DPZ', 'DRD', 'DRH', 'DRI', 'DRS', 'DRVN', 'DSGN', 'DSGR', 'DSGX', 'DSP',
      'DT', 'DTE', 'DTM', 'DTRE', 'DUK', 'DUOL', 'DV', 'DVA', 'DVAX', 'DVN', 'DX', 'DXC',
      'DXCM', 'DXPE', 'DY', 'DYN', 'EA', 'EAF', 'EAT', 'EB', 'EBAY', 'EBC', 'ECL',
      'ECPG', 'ECVT', 'ED', 'EDIT', 'EDU', 'EE', 'EEFT', 'EFC', 'EFSC', 'EFX', 'EG', 'EGBN',
      'EGHT', 'EGP', 'EGY', 'EH', 'EHAB', 'EHC', 'EHTH', 'EIG', 'EIX', 'EL', 'ELAN', 'ELF',
      'ELME', 'ELS', 'ELV', 'ELVN', 'EMBC', 'EME', 'EMN', 'EMR', 'ENB', 'ENFN', 'ENPH', 'ENR',
      'ENS', 'ENSG', 'ENTA', 'ENTG', 'ENVA', 'ENVX', 'EOG', 'EOLS', 'EOSE', 'EPAC', 'EPAM', 'EPC',
      'EPM', 'EPR', 'EPRT', 'EQBK', 'EQH', 'EQIX', 'EQNR', 'EQR', 'EQT', 'ERAS', 'ERIC', 'ERIE',
      'ERJ', 'ES', 'ESAB', 'ESE', 'ESGR', 'ESI', 'ESNT', 'ESPR', 'ESRT', 'ESS', 'ESTC', 'ET',
      'ETH', 'ETHA', 'ETHE', 'ETN', 'ETNB', 'ETOR', 'ETR', 'ETSY', 'ETWO', 'EU', 'EUFN', 'EVBG',
      'EVC', 'EVCM', 'EVER', 'EVGO', 'EVH', 'EVLV', 'EVR', 'EVRG', 'EVTC', 'EW', 'EWBC', 'EWC',
      'EWCZ', 'EWG', 'EWJ', 'EWU', 'EWW', 'EWY', 'EWZ', 'EXAS', 'EXC', 'EXE', 'EXEL', 'EXLS',
      'EXP', 'EXPD', 'EXPE', 'EXPI', 'EXPO', 'EXR', 'EXTR', 'EYE', 'EYPT', 'EZU', 'F', 'FA',
      'FAF', 'FAMI', 'FANG', 'FARO', 'FAST', 'FATE', 'FBIN', 'FBK', 'FBNC', 'FBP', 'FBRT', 'FC',
      'FCBC', 'FCF', 'FCFS', 'FCN', 'FCNCA', 'FCPT', 'FCX', 'FDMT', 'FDP', 'FDS', 'FDX', 'FE',
      'FELE', 'FERG', 'FET', 'FEZ', 'FFBC', 'FFIC', 'FFIN', 'FFIV', 'FFWM', 'FG', 'FHB',
      'FHN', 'FI', 'FIBK', 'FICO', 'FIGS', 'FINV', 'FIP', 'FIS', 'FISI', 'FITB', 'FIVE', 'FIVN',
      'FIX', 'FIZZ', 'FL', 'FLG', 'FLGT', 'FLNC', 'FLNG', 'FLO', 'FLR', 'FLS', 'FLUT', 'FLWS',
      'FLYW', 'FMAO', 'FMBH', 'FMC', 'FMNB', 'FN', 'FNB', 'FND', 'FNF', 'FNGR', 'FNKO',
      'FNLC', 'FOCS', 'FOLD', 'FOR', 'FORM', 'FORR', 'FOUR', 'FOX', 'FOXA', 'FOXF', 'FPI', 'FR',
      'FRBA', 'FRGE', 'FRHC', 'FRPT', 'FRSH', 'FRST', 'FRT', 'FSBC', 'FSLR', 'FSLY', 'FSS', 'FTAI',
      'FTDR', 'FTI', 'FTNT', 'FTRE', 'FTV', 'FUBO', 'FUL', 'FULC', 'FULT', 'FUN', 'FUTU', 'FVRR',
      'FWRD', 'FWRG', 'FXI', 'FYBR', 'G', 'GAB', 'GABC', 'GAIA', 'GAL', 'GALT',
      'GAN', 'GAP', 'GATX', 'GBCI', 'GBDC', 'GBIO', 'GBNY', 'GBTG', 'GBTC', 'GBX',
      'GCBC', 'GCI', 'GCMG', 'GCO', 'GCT', 'GD', 'GDDY', 'GDEN', 'GDOT', 'GDYN', 'GE', 'GEF',
      'GEHC', 'GEL', 'GEN', 'GENI', 'GEO', 'GERN', 'GETY', 'GEV', 'GFF', 'GFS', 'GGG', 'GH',
      'GHM', 'GIC', 'GIII', 'GILD', 'GIS', 'GKOS', 'GL', 'GLBE', 'GLDD', 'GLNG', 'GLOB', 'GLPI',
      'GLRE', 'GLUE', 'GLW', 'GM', 'GMAB', 'GME', 'GMED', 'GMRE', 'GMS', 'GNE', 'GNK', 'GNL',
      'GNRC', 'GNTX', 'GNTY', 'GNW', 'GO', 'GOGL', 'GOGO', 'GOLF', 'GOOD', 'GOOG', 'GOOGL', 'GOOS',
      'GPK', 'GPN', 'GPOR', 'GPRE', 'GPRO', 'GRAB', 'GRAL', 'GRBK', 'GRC', 'GRFS', 'GRMN', 'GRND',
      'GRNT', 'GRPN', 'GRWG', 'GS', 'GSAT', 'GSBC', 'GSHD', 'GT', 'GTES', 'GTLB', 'GTLS', 'GTM',
      'GTN', 'GTX', 'GTY', 'GVA', 'GWRE', 'GWW', 'GXO', 'H', 'HAE', 'HAFC', 'HAIN', 'HAL',
      'HALO', 'HAS', 'HASI', 'HAYW', 'HBAN', 'HBCP', 'HBI', 'HBNC', 'HBT', 'HCA', 'HCAT', 'HCC',
      'HCI', 'HCKT', 'HCSG', 'HD', 'HDB', 'HDSN', 'HE', 'HEI', 'HELE', 'HES', 'HESM', 'HEXO',
      'HFWA', 'HG', 'HGV', 'HHH', 'HI', 'HIG', 'HII', 'HIMS', 'HIPO', 'HIW', 'HL', 'HLF',
      'HLI', 'HLIO', 'HLIT', 'HLMN', 'HLNE', 'HLT', 'HLX', 'HMN', 'HMST', 'HNI', 'HNRG', 'HNST',
      'HOFT', 'HOG', 'HOLX', 'HOMB', 'HON', 'HONE', 'HOOD', 'HOPE', 'HOUS', 'HP', 'HPE', 'HPQ',
      'HPP', 'HQY', 'HR', 'HRB', 'HRI', 'HRL', 'HRMY', 'HSBC', 'HSC', 'HSIC', 'HSII',
      'HST', 'HSTM', 'HSY', 'HTBK', 'HTH', 'HTLD', 'HTO', 'HTZ', 'HUBB', 'HUBG', 'HUBS',
      'HUM', 'HUMA', 'HUN', 'HURN', 'HUT', 'HVT', 'HWM', 'HXL', 'HY', 'HYLN', 'HZO', 'IAC',
      'IART', 'IAS', 'IBCP', 'IBKR', 'IBM', 'IBN', 'IBOC', 'IBP', 'IBRX', 'IBTA', 'ICE',
      'ICFI', 'ICHR', 'ICL', 'ICLN', 'ICLR', 'ICUI', 'IDA', 'IDCC', 'IDT', 'IDYA', 'IDXX', 'IE',
      'IESC', 'IEX', 'IFF', 'IGMS', 'IGT', 'IGV', 'IHI', 'IHS', 'IIIN', 'IIIV', 'IIPR', 'ILMN',
      'ILPT', 'IMAX', 'IMCR', 'IMGN', 'IMKTA', 'IMNM', 'IMO', 'IMVT', 'IMXI', 'INBK', 'INBX', 'INCY',
      'INDA', 'INDI', 'INDV', 'INFA', 'INFY', 'INGM', 'INGN', 'INGR', 'INMD', 'INN', 'INO', 'INOD', 'INSE',
      'INSM', 'INSP', 'INSW', 'INTA', 'INTC', 'INTU', 'INVA', 'INVH', 'INVX', 'IONQ', 'IONS', 'IOSP',
      'IOT', 'IOVA', 'IP', 'IPAR', 'IPG', 'IPGP', 'IPI', 'IPSC', 'IQ', 'IQV', 'IR', 'IRDM',
      'IREN', 'IRM', 'IRMD', 'IRON', 'IRT', 'IRTC', 'IRWD', 'ISPC', 'ISRG', 'IT', 'ITA',
      'ITB', 'ITCI', 'ITGR', 'ITOS', 'ITRI', 'ITT', 'ITW', 'IVT', 'IVV', 'IVZ', 'IWM', 'IWO',
      'IXUS', 'IYR', 'IYT', 'IYW', 'J', 'JACK', 'JAKK', 'JAMF', 'JANX', 'JAZZ', 'JBL', 'JBLU',
      'JBGS', 'JBHT', 'JBI', 'JBIO', 'JBSS', 'JBTM', 'JCI', 'JD', 'JEF', 'JELD', 'JHG', 'JJSF',
      'JKHY', 'JLL', 'JMSB', 'JNJ', 'JNK', 'JNPR', 'JOBY', 'JOE', 'JPM', 'JRVR', 'JXN', 'K',
      'KAI', 'KALU', 'KALV', 'KAR', 'KBH', 'KBR', 'KC', 'KD', 'KDP', 'KE', 'KEX',
      'KEY', 'KEYS', 'KFRC', 'KFY', 'KGC', 'KHC', 'KIDS', 'KIM', 'KIND', 'KKR', 'KLAC',
      'KLC', 'KLG', 'KLIC', 'KMB', 'KMI', 'KMPR', 'KMT', 'KMX', 'KN', 'KNF', 'KNSA', 'KNSL',
      'KNTK', 'KNX', 'KO', 'KOD', 'KODK', 'KOP', 'KOS', 'KR', 'KRC', 'KREF', 'KRG', 'KROS',
      'KRYS', 'KSS', 'KTB', 'KTOS', 'KURA', 'KVUE', 'KVYO', 'KW', 'KWR', 'KYMR', 'L', 'LAB',
      'LAD', 'LADR', 'LAMR', 'LAND', 'LASR', 'LAUR', 'LAW', 'LAZ', 'LAZR', 'LBRT',
      'LC', 'LCAP', 'LCII', 'LCID', 'LCNB', 'LDOS', 'LEA', 'LECO', 'LEG', 'LEGN',
      'LEN', 'LENZ', 'LESL', 'LEU', 'LFST', 'LFUS', 'LGIH', 'LGND', 'LH', 'LHX', 'LI', 'LII',
      'LIN', 'LINC', 'LIND', 'LINE', 'LION', 'LITE', 'LIVN', 'LKFN', 'LKQ', 'LLY',
      'LMAT', 'LMB', 'LMND', 'LMNR', 'LMT', 'LNC', 'LNG', 'LNN', 'LNT', 'LNTH',
      'LNW', 'LOB', 'LOCO', 'LOGI', 'LOAR', 'LOPE', 'LOVE', 'LOW', 'LPL', 'LPLA', 'LPG', 'LPRO',
      'LPX', 'LQDA', 'LQDT', 'LRCX', 'LRMR', 'LRN', 'LSCC', 'LSPD', 'LSTR', 'LTC', 'LTH', 'LU',
      'LULU', 'LUMN', 'LUNG', 'LUNR', 'LUV', 'LVS', 'LVWR', 'LW', 'LWLG', 'LX', 'LXFR', 'LXP',
      'LXU', 'LYB', 'LYFT', 'LYG', 'LYTS', 'LYV', 'LZ', 'LZB', 'M', 'MA', 'MAA', 'MAC',
      'MAG', 'MAN', 'MANH', 'MANU', 'MAR', 'MARA', 'MAS', 'MASI', 'MASS', 'MAT', 'MATV', 'MATW',
      'MATX', 'MAX', 'MAXN', 'MBB', 'MBIN', 'MBLY', 'MC', 'MCB', 'MCBS', 'MCD', 'MCFT', 'MCHP',
      'MCK', 'MCO', 'MCRI', 'MCS', 'MCW', 'MCY', 'MD', 'MDB', 'MDGL', 'MDLZ', 'MDT', 'MDU',
      'MDXG', 'MDY', 'MED', 'MEDP', 'MEG', 'MEI', 'MELI', 'MEOH', 'MESO', 'MET', 'META', 'MFG',
      'MGA', 'MGEE', 'MGM', 'MGNI', 'MGNX', 'MGPI', 'MGTX', 'MGY', 'MHO', 'MHK', 'MIDD',
      'MIR', 'MIRM', 'MITK', 'MKC', 'MKL', 'MKSI', 'MKTX', 'MLI', 'MLKN', 'MLM', 'MLNK', 'MLR',
      'MLYS', 'MMC', 'MMM', 'MMS', 'MMSI', 'MNKD', 'MNMD', 'MNRO', 'MNST', 'MNTK', 'MO', 'MOD',
      'MODG', 'MODV', 'MOFG', 'MOH', 'MOMO', 'MORN', 'MOS', 'MOV', 'MP', 'MPB', 'MPC',
      'MPLX', 'MPW', 'MPWR', 'MQ', 'MRC', 'MRCY', 'MRK', 'MRNA', 'MRSN', 'MRTN', 'MRVI', 'MRVL',
      'MRX', 'MS', 'MSA', 'MSBI', 'MSCI', 'MSEX', 'MSFT', 'MSGE', 'MSGS', 'MSI', 'MSM', 'MSTR',
      'MT', 'MTB', 'MTCH', 'MTD', 'MTDR', 'MTG', 'MTH', 'MTN', 'MTRN', 'MTSI', 'MTSR', 'MTUM',
      'MTW', 'MTX', 'MTZ', 'MU', 'MUB', 'MUR', 'MUSA', 'MVBF', 'MVIS', 'MVST', 'MWA', 'MXCT',
      'MXL', 'MYE', 'MYGN', 'MYPS', 'MYRG', 'NABL', 'NAAS', 'NAT', 'NATL', 'NAVI', 'NBBK', 'NBHC',
      'NBIX', 'NBR', 'NBTB', 'NCLH', 'NCMI', 'NCNO', 'NDAQ', 'NDSN', 'NE', 'NECB', 'NEE', 'NEM',
      'NEO', 'NEOG', 'NET', 'NEU', 'NEWT', 'NEXT', 'NFBK', 'NFE', 'NFG', 'NFLX', 'NG', 'NGNE',
      'NGVC', 'NGVT', 'NHC', 'NHI', 'NI', 'NIC', 'NJR', 'NKE', 'NKTX', 'NLOP', 'NLY', 'NMIH',
      'NMRA', 'NMRK', 'NN', 'NNE', 'NNI', 'NNN', 'NNOX', 'NOC', 'NOG', 'NOK', 'NOV', 'NOVT',
      'NOW', 'NPKI', 'NPO', 'NRC', 'NRDS', 'NRG', 'NRGV', 'NRIX', 'NSA', 'NSC', 'NSIT', 'NSP',
      'NSSC', 'NTAP', 'NTB', 'NTCT', 'NTGR', 'NTLA', 'NTNX', 'NTR', 'NTRA', 'NTRS', 'NTST', 'NU',
      'NUE', 'NUS', 'NUVB', 'NUVL', 'NVAX', 'NVCR', 'NVDA', 'NVEE', 'NVGS', 'NVMI', 'NVO', 'NVS',
      'NVST', 'NVT', 'NVTS', 'NWBI', 'NWE', 'NWL', 'NWN', 'NWPX', 'NWS', 'NWSA', 'NX', 'NXE',
      'NXPI', 'NXRT', 'NXST', 'NXT', 'NYMT', 'NYT', 'O', 'OABI', 'OBDC', 'OBK', 'OC', 'OCFC',
      'OCGN', 'OCUL', 'ODD', 'ODFL', 'ODP', 'OEC', 'OFG', 'OFIX', 'OGE', 'OGN', 'OGS', 'OHI',
      'OIH', 'OI', 'OII', 'OIS', 'OKE', 'OKLO', 'OKTA', 'OLED', 'OLLI', 'OLO', 'OLMA', 'OLN',
      'OLP', 'OLPX', 'OMC', 'OMCL', 'OMER', 'OMF', 'OMI', 'ON', 'ONB', 'ONEW', 'ONIT', 'ONON',
      'ONTF', 'ONTO', 'OOMA', 'OPCH', 'OPK', 'OPRA', 'OPRX', 'ORA', 'ORC', 'ORCL', 'ORGO', 'ORI',
      'ORIC', 'ORLY', 'OSBC', 'OSCR', 'OSI', 'OSIS', 'OSK', 'OSPN', 'OSUR', 'OSW', 'OTIS', 'OTTR',
      'OUST', 'OUT', 'OVV', 'OWL', 'OXM', 'OXY', 'OZK', 'PAA', 'PAAS', 'PAC', 'PACB',
      'PACK', 'PACS', 'PAG', 'PAGP', 'PAGS', 'PAHC', 'PANL', 'PANW', 'PAR', 'PARA', 'PARR',
      'PATH', 'PATK', 'PAX', 'PAYC', 'PAYO', 'PAYS', 'PAYX', 'PB', 'PBA', 'PBF', 'PBI', 'PBPB',
      'PBR', 'PCAR', 'PCG', 'PCH', 'PCOR', 'PCRX', 'PCT', 'PCTY', 'PCVX', 'PD', 'PDD', 'PDFS',
      'PDM', 'PEB', 'PEBO', 'PECO', 'PEG', 'PEGA', 'PENG', 'PEN', 'PENN', 'PEP', 'PEPG', 'PFE',
      'PFG', 'PFGC', 'PFS', 'PFSI', 'PG', 'PGC', 'PGEN', 'PGNY', 'PGR', 'PGRE', 'PGY', 'PH',
      'PHAT', 'PHIN', 'PHLT', 'PHM', 'PHR', 'PI', 'PII', 'PINC', 'PINS', 'PIPR', 'PJT', 'PK',
      'PKE', 'PKG', 'PKST', 'PL', 'PLAB', 'PLAY', 'PLD', 'PLL', 'PLMR', 'PLNT', 'PLRX', 'PLSE',
      'PLTK', 'PLTR', 'PLUG', 'PLUS', 'PLXS', 'PLYM', 'PM', 'PMT', 'PNC', 'PNFP', 'PNR', 'PNTG',
      'PNW', 'PODD', 'POOL', 'POR', 'POST', 'POWI', 'POWL', 'POWW', 'PPC', 'PPG', 'PPL', 'PPTA',
      'PR', 'PRA', 'PRAA', 'PRAX', 'PRCH', 'PRCT', 'PRDO', 'PRG', 'PRGO', 'PRGS', 'PRI', 'PRIM',
      'PRK', 'PRKS', 'PRLB', 'PRM', 'PRMB', 'PRME', 'PRO', 'PROK', 'PRSU', 'PRTA', 'PRTH', 'PRU',
      'PRVA', 'PSA', 'PSEC', 'PSFE', 'PSMT', 'PSN', 'PSNY', 'PSTG', 'PSTL', 'PSX', 'PTC', 'PTCT',
      'PTEN', 'PTGX', 'PTLO', 'PTON', 'PUBM', 'PUMP', 'PVH', 'PWP', 'PWR', 'PX', 'PYPL', 'PZZA',
      'QBTS', 'QCOM', 'QDEL', 'QFIN', 'QGEN', 'QLYS', 'QNST', 'QQQ', 'QRVO', 'QS', 'QSI', 'QSR',
      'QTRX', 'QTTB', 'QTWO', 'QUBT', 'QXO', 'QYLD', 'R', 'RACE', 'RAMP', 'RARE', 'RBA', 'RBBN',
      'RBC', 'RBLX', 'RBRK', 'RC', 'RCAT', 'RCEL', 'RCL', 'RCKT', 'RCUS', 'RDDT', 'RDN', 'RDNT',
      'RDUS', 'RDVT', 'RDW', 'RDWR', 'REAL', 'REAX', 'REFI', 'REG', 'REGN', 'RELY', 'REPL', 'REPX',
      'RES', 'REVG', 'REX', 'REXR', 'REYN', 'REZI', 'RF', 'RGA', 'RGEN', 'RGLD', 'RGNX', 'RGP',
      'RGR', 'RGTI', 'RH', 'RHI', 'RHP', 'RICK', 'RIG', 'RIGL', 'RIO', 'RIOT', 'RITM', 'RIVN',
      'RJF', 'RKLB', 'RKT', 'RL', 'RLAY', 'RLI', 'RLJ', 'RLX', 'RM', 'RMAX', 'RMBS', 'RMD',
      'RMNI', 'RMR', 'RNA', 'RNG', 'RNR', 'RNST', 'RNW', 'ROAD', 'ROCK', 'ROG', 'ROIV', 'ROK',
      'ROL', 'ROOT', 'ROP', 'ROST', 'ROKU', 'RPM', 'RPRX', 'RRC', 'RRR', 'RRX', 'RS', 'RSG',
      'RSI', 'RSP', 'RTX', 'RUM', 'RUN', 'RVLV', 'RVMD', 'RVTY', 'RWT', 'RXO', 'RXRX',
      'RXST', 'RY', 'RYAM', 'RYAN', 'RYI', 'RYN', 'RYTM', 'S', 'SA', 'SABR', 'SAFE', 'SAFT', 'SAGE',
      'SAH', 'SAIA', 'SAIC', 'SAIL', 'SAM', 'SANA', 'SAN', 'SAND', 'SANM', 'SAP', 'SARO', 'SATS',
      'SAVA', 'SB', 'SBAC', 'SBCF', 'SBGI', 'SBH', 'SBRA', 'SBSI', 'SBUX', 'SCCO', 'SCHD', 'SCHG',
      'SCHK', 'SCHL', 'SCHW', 'SCI', 'SCL', 'SCPH', 'SCS', 'SCSC', 'SCVL', 'SD', 'SDGR', 'SDRL',
      'SE', 'SEAT', 'SEE', 'SEG', 'SEI', 'SEIC', 'SEM', 'SEMR', 'SEPN', 'SERV', 'SEZL', 'SF',
      'SFBS', 'SFD', 'SFIX', 'SFL', 'SFM', 'SFNC', 'SFST', 'SG', 'SGHC', 'SGI', 'SGML', 'SGOL',
      'SH', 'SHAK', 'SHBI', 'SHC', 'SHCO', 'SHEL', 'SHEN', 'SHLS', 'SHO', 'SHOO', 'SHOP', 'SHW',
      'SIBN', 'SIG', 'SIGA', 'SIGI', 'SILA', 'SIL', 'SIRI', 'SITC', 'SITE', 'SITM', 'SJM', 'SKIN',
      'SKT', 'SKWD', 'SKX', 'SKY', 'SKYT', 'SKYW', 'SLAB', 'SLB', 'SLDP', 'SLG', 'SLGN', 'SLM',
      'SLNO', 'SLP', 'SLQT', 'SLVM', 'SM', 'SMBC', 'SMBK', 'SMCI', 'SMG', 'SMMT', 'SMP', 'SMPL',
      'SMR', 'SMRT', 'SMTC', 'SN', 'SNA', 'SNBR', 'SNCY', 'SNDR', 'SNDX', 'SNEX', 'SNOW',
      'SNPS', 'SNV', 'SNX', 'SO', 'SOC', 'SOFI', 'SOLV', 'SON', 'SONO', 'SONY', 'SOUN', 'SOXL',
      'SOXX', 'SPB', 'SPCX', 'SPFI', 'SPG', 'SPGI', 'SPHR', 'SPNS', 'SPNT', 'SPOK', 'SPOT', 'SPR', 'SPRY',
      'SPSC', 'SPT', 'SPTN', 'SPXC', 'SPXL', 'SPY', 'SR', 'SRAD', 'SRCE', 'SRDX', 'SRE', 'SRI',
      'SRPT', 'SRRK', 'SSB', 'SSD', 'SSNC', 'SSP', 'SSRM', 'SSTI', 'SSTK', 'ST', 'STAA', 'STAG',
      'STC', 'STE', 'STEM', 'STEP', 'STGW', 'STHO', 'STKL', 'STLD', 'STNE', 'STNG', 'STOK', 'STR',
      'STRA', 'STRL', 'STRO', 'STT', 'STWD', 'STX', 'STZ', 'SU', 'SUI', 'SUN', 'SUNS', 'SUPN',
      'SUZ', 'SVC', 'SVRA', 'SVV', 'SW', 'SWBI', 'SWK', 'SWKS', 'SWX', 'SWTX', 'SXC', 'SXI',
      'SXT', 'SYBT', 'SYF', 'SYK', 'SYM', 'SYNA', 'SYRE', 'SYY', 'T', 'TAC', 'TAL', 'TALK',
      'TALO', 'TAP', 'TARS', 'TBBK', 'TBCH', 'TBI', 'TBPH', 'TCBI', 'TCBK', 'TCMD', 'TCX', 'TDC',
      'TDG', 'TDOC', 'TDS', 'TDUP', 'TDW', 'TDY', 'TEAD', 'TEAM', 'TECH', 'TECK', 'TEL', 'TEM',
      'TENB', 'TER', 'TERN', 'TEX', 'TFC', 'TFI', 'TG', 'TGI', 'TGLS', 'TGNA', 'TGT', 'TGTX',
      'TH', 'THC', 'THFF', 'THG', 'THO', 'THR', 'THRD', 'THRM', 'THRY', 'THS', 'TIGO', 'TIGR',
      'TILE', 'TIPT', 'TITN', 'TJX', 'TK', 'TKO', 'TKR', 'TLN', 'TLRY', 'TLT', 'TM', 'TMC',
      'TMCI', 'TMDX', 'TME', 'TMHC', 'TMO', 'TMP', 'TMUS', 'TNC', 'TNDM', 'TNET', 'TNGX', 'TNK',
      'TNL', 'TNYA', 'TOL', 'TOST', 'TOWN', 'TPB', 'TPC', 'TPG', 'TPH', 'TPIC', 'TPL', 'TPR',
      'TQQQ', 'TR', 'TRC', 'TRDA', 'TREE', 'TREX', 'TRGP', 'TRI', 'TRIP', 'TRMB', 'TRMK', 'TRML',
      'TRN', 'TRNO', 'TRNS', 'TROW', 'TROX', 'TRS', 'TRST', 'TRTX', 'TRU', 'TRUE', 'TRUP', 'TRV',
      'TS', 'TSCO', 'TSEM', 'TSHA', 'TSLA', 'TSM', 'TSN', 'TT', 'TTAN', 'TTC', 'TTD', 'TTEC',
      'TTEK', 'TTGT', 'TTI', 'TTMI', 'TTWO', 'TVTX', 'TW', 'TWI', 'TWLO', 'TWO', 'TWST', 'TXG',
      'TXN', 'TXNM', 'TXRH', 'TXT', 'TYL', 'TYRA', 'U', 'UA', 'UAA', 'UAL', 'UBER', 'UBSI',
      'UBS', 'UCB', 'UCTT', 'UDMY', 'UDR', 'UE', 'UEC', 'UFCS', 'UFPI', 'UFPT', 'UGI', 'UHAL',
      'UHS', 'UHT', 'UI', 'UIS', 'ULCC', 'ULTA', 'UMBF', 'UMH', 'UMC', 'UNF', 'UNFI', 'UNH',
      'UNIT', 'UNM', 'UNP', 'UNTY', 'UPBD', 'UPRO', 'UPS', 'UPST', 'UPWK', 'URBN', 'URGN', 'URI',
      'USAR', 'USB', 'USFD', 'USLM', 'USNA', 'USO', 'USPH', 'UTHR', 'UTI', 'UTL', 'UTZ', 'UUUU',
      'UVE', 'UVSP', 'UVV', 'UWMC', 'V', 'VAC', 'VAL', 'VALE', 'VC', 'VCEL', 'VCTR', 'VCYT',
      'VECO', 'VEEV', 'VEL', 'VERA', 'VERV', 'VERX', 'VET', 'VFC', 'VFS', 'VG', 'VGK',
      'VIAV', 'VICI', 'VICR', 'VIK', 'VIR', 'VIRT', 'VIST', 'VITL', 'VKTX', 'VLTO', 'VLO', 'VLY',
      'VMC', 'VMD', 'VMEO', 'VMI', 'VNDA', 'VNO', 'VNOM', 'VNQ', 'VOYA', 'VPG', 'VRA', 'VRNA',
      'VRDN', 'VRE', 'VREX', 'VRNS', 'VRNT', 'VRRM', 'VRSK', 'VRSN', 'VRT', 'VRTX', 'VSAT', 'VSCO',
      'VSEC', 'VSH', 'VST', 'VSTS', 'VTEX', 'VTMX', 'VTOL', 'VTR', 'VTRS', 'VVV', 'VVX', 'VWO',
      'VYGR', 'VYX', 'VZ', 'W', 'WAB', 'WABC', 'WAFD', 'WAL', 'WASH', 'WAT', 'WAY',
      'WBA', 'WBD', 'WBS', 'WCC', 'WCN', 'WD', 'WDC', 'WDAY', 'WDFC', 'WDS', 'WEAV', 'WEC',
      'WELL', 'WEN', 'WERN', 'WES', 'WEX', 'WFC', 'WFRD', 'WGO', 'WGS', 'WH', 'WHD', 'WHR', 'WIT',
      'WILD', 'WING', 'WIX', 'WKC', 'WLDN', 'WLK', 'WLY', 'WM', 'WMB', 'WMK', 'WMS', 'WMT',
      'WNC', 'WNS', 'WOLF', 'WOOF', 'WOR', 'WOW', 'WPC', 'WPM', 'WRB', 'WRBY', 'WRD', 'WS',
      'WSBC', 'WSBF', 'WSC', 'WSFS', 'WSM', 'WSO', 'WSR', 'WST', 'WT', 'WTBA', 'WTFC', 'WTI',
      'WTRG', 'WTS', 'WTTR', 'WTW', 'WU', 'WULF', 'WVE', 'WWD', 'WWW', 'WY', 'WYNN', 'X',
      'XENE', 'XERS', 'XFOR', 'XHB', 'XHR', 'XLB', 'XLC', 'XLE', 'XLF', 'XLI', 'XLK', 'XLP',
      'XLU', 'XLV', 'XLY', 'XMTR', 'XNCR', 'XOM', 'XP', 'XPEL', 'XPER', 'XPEV', 'XPO', 'XPOF',
      'XPRO', 'XRAY', 'XRX', 'XYL', 'XYZ', 'YELP', 'YETI', 'YEXT', 'YMAB', 'YORW', 'YOU', 'YUM',
      'Z', 'ZBH', 'ZBRA', 'ZD', 'ZETA', 'ZEUS', 'ZG', 'ZI', 'ZIM', 'ZIMV', 'ZION', 'ZIP',
      'ZM', 'ZNTL', 'ZS', 'ZTO', 'ZTS', 'ZUMZ', 'ZVRA', 'ZWS', 'ZYME', 'ZYXI'
    ];
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
      document.body.dataset.theme = document.body.dataset.theme === 'dark'
        ? 'light'
        : 'dark';

      // Optional: Save preference to localStorage
      localStorage.setItem('theme', document.body.dataset.theme);
    });

    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.dataset.theme = savedTheme;
    function toPercent(value) {
      const num = parseFloat(value);
      return isNaN(num) ? 0 : (num * 100).toFixed(2);
    }
    function toDecimal(value) {
      const num = parseFloat(value);
      return isNaN(num) ? 0 : num.toFixed(2);
    }
    // Add this function in your script section
    function enableRowHighlighting() {
      document.querySelectorAll('#earningsTable tbody tr').forEach(row => {
        row.onclick = function () {
          // Remove highlight from all rows
          document.querySelectorAll('#earningsTable tbody tr').forEach(r => r.classList.remove('row-selected'));
          // Add highlight to clicked row
          this.classList.add('row-selected');
        };
      });
    }
    function calculateRSI(closes, period = 14) {
      if (closes.length <= period) return null;

      let gains = 0;
      let losses = 0;

      // Initial average gain/loss
      for (let i = 1; i <= period; i++) {
        const delta = closes[i] - closes[i - 1];
        if (delta > 0) gains += delta;
        else losses -= delta;
      }

      let avgGain = gains / period;
      let avgLoss = losses / period;

      // Apply smoothing for the rest
      for (let i = period + 1; i < closes.length; i++) {
        const delta = closes[i] - closes[i - 1];
        const gain = delta > 0 ? delta : 0;
        const loss = delta < 0 ? -delta : 0;

        avgGain = (avgGain * (period - 1) + gain) / period;
        avgLoss = (avgLoss * (period - 1) + loss) / period;
      }

      const rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
      const rsi = 100 - 100 / (1 + rs);
      return rsi;
    }

    function calculateMA10(closes) {
      if (!closes || closes.length < 10) return 0;
      const recent = closes.slice(-10);
      return recent.reduce((sum, price) => sum + price, 0) / 10;
    }

    function calculateMA50(closes) {
      if (!closes || closes.length < 50) return 0;
      const recent = closes.slice(-50);
      return recent.reduce((sum, price) => sum + price, 0) / 50;
    }

    function calculateMA200(closes) {
      if (!closes || closes.length < 200) return 0;
      const recent = closes.slice(-200);
      return recent.reduce((sum, price) => sum + price, 0) / 200;
    }

    async function fetchWithRetry(url, retries = 2, delay = 1000) {
      for (let i = 0; i < retries; i++) {
        try {
          const res = await fetch(url);
          if (res.status === 429 || res.status >= 500) throw new Error('Rate limit or server error');
          return await res.json().catch(() => ({}));
        } catch (err) {
          if (i === retries - 1) return {};
          await new Promise(res => setTimeout(res, delay + Math.random() * 500));
        }
      }
    }
    

    

    
    

    

    async function fetchEarnings(ticker) {
      try {
        const [json, jsonPrice, jsonIvData, jsonInfo] = await Promise.all([
          fetchWithRetry(`https://phx.unusualwhales.com/api/companies_earnings/historic/${ticker}`),
          fetchWithRetry(`https://phx.unusualwhales.com/api/ticker/${ticker}/price/`),
          fetchWithRetry(`https://phx.unusualwhales.com/api/volatility/${ticker}/stats`),
          fetchWithRetry(`https://phx.unusualwhales.com/api/companies/${ticker}/`)
        ]);

        // EMSE Filter: Market Cap > 1 Billion and 30-Day Volume > 1 Million (Commented out as tickers are pre-filtered)
        if (!json.data || json.data.length === 0) // || !jsonInfo.company || jsonInfo.company.marketcap < 1000000000 || jsonInfo.company.avg30_volume < 1000000)
          return null;

        var latest = json.data[json.data.length - 1];
        var next = latest;
        
        // Earnings date filter (er check) has been permanently removed as requested.

        // ONLY fetch Yahoo Short Interest if it passed the strict filters!
        const resShort = await fetchYahooShortInterest(ticker);

        // Fix: Use actual post_earnings_move_1d instead of expected_move_perc for historical realized moves
        const last4Quarters = json.data.slice(-5, -1); // Exclude the next earnings date
        const last4Quarters = json.data.slice(-5, -1); 

        const avgHistoricRealizedMove = last4Quarters
          .map(q => Math.abs(parseFloat(q.post_earnings_move_1d) || 0))
          .filter(move => move > 0)
          .reduce((sum, move, i, arr) => sum + move / arr.length, 0);

        const histMoves = last4Quarters.map(q => {
          const baseMove = parseFloat(q.post_earnings_move_1d) || 0;
          return (baseMove * 100).toFixed(2);
        }).reverse();

        if (!latest.post_earnings_move_3d && json.data.length > 1)
          latest = json.data[json.data.length - 2];

        let latestIndex = json.data.indexOf(latest);
        let lastToLast = latestIndex > 0 ? json.data[latestIndex - 1] : null;
        let mcp2qPreErPrice = lastToLast ? parseFloat(lastToLast.price) || 0 : 0;

        const beta = jsonInfo.company ? parseFloat(jsonInfo.company.beta) || 0 : 0;
        const ma200 = parseFloat(jsonInfo.company.day200_moving_avg) || 0;
        const high52w = parseFloat(jsonInfo.company.week52_high) || 0;
        const industry = jsonInfo.company.industry_type || "";
        const marketcap = jsonInfo.company ? parseFloat(jsonInfo.company.marketcap) || 0 : 0;
        const ivRank = jsonIvData && jsonIvData.data ? parseFloat(jsonIvData.data.iv_rank) || 999 : 999;
        
        const financials = await getFinancialsCached(ticker);
        const total_revenue = financials.total_revenue || 0;
        const ps_ratio = (marketcap > 0 && total_revenue > 0) ? (marketcap / total_revenue) : 0;
        
        const latestPrice = parseFloat(jsonPrice.curr) || parseFloat(jsonPrice.prev) || 0;
        const preErPrice = parseFloat(latest.price) || 0;
        const postErMove1dRatio = parseFloat(latest.post_earnings_move_1d) || 0;
        const postErPrice = preErPrice * (1 + postErMove1dRatio);
        const priceChange = postErPrice ? ((latestPrice - postErPrice) / postErPrice * 100).toFixed(2) : 0;
        const mcp = preErPrice ? ((latestPrice - preErPrice) / preErPrice * 100).toFixed(2) : 0;
        const mcp2q = mcp2qPreErPrice ? ((latestPrice - mcp2qPreErPrice) / mcp2qPreErPrice * 100).toFixed(2) : 0;
        const reportTime = next.report_time == 'unknown' || next.report_time == '' || !next.report_time ? '-' : next.report_time == 'premarket' ? 'PM' : next.report_time == 'postmarket' ? 'AH' : next.report_time;
        
        const ma50 = jsonInfo.company ? parseFloat(jsonInfo.company.day50_moving_avg) || 0 : 0;

        

        return {
          ticker: ticker,
          preErPrice: preErPrice || 0,
          mcp2qPreErPrice: mcp2qPreErPrice || 0,
          price: latestPrice || 0,
          priceChange: priceChange || 0,
          mcp: mcp || 0,
          mcp2q: mcp2q || 0,
          finvizSma200: null,
          er_date: next.report_date || 'N/A',
          report_date: latest.report_date || 'N/A',
          avgHistoricMove: avgHistoricRealizedMove * 100 || 0,
          straddle: toPercent(next.expected_move_perc) || 0,
          expected_move_perc: toPercent(latest.expected_move_perc) || 0,
          post_earnings_move_1d: toPercent(latest.post_earnings_move_1d) || 0,
          histMove1: histMoves[0] !== undefined ? histMoves[0] : null,
          histMove2: histMoves[1] !== undefined ? histMoves[1] : null,
          histMove3: histMoves[2] !== undefined ? histMoves[2] : null,
          histMove4: histMoves[3] !== undefined ? histMoves[3] : null,
          report_time: reportTime,
          iv_rank: ivRank,
          beta: beta,
          ma200: ma200,
          ma50: ma50,
          high52w: high52w,
          industry: industry,
          marketcap: marketcap,
          ps_ratio: ps_ratio,
          shortInt: shortInt
        };
      } catch (err) {
        console.error(`Error fetching ${ticker}:`, err);
        return null;
      }
    }

    function updatePriceCells(ticker, priceData, data) {
      const row = document.getElementById(`row-${ticker}`);
      if (!row) return;

      const price = data.price || 0;
      const ma10Ratio = priceData.ma10 ? ((price - priceData.ma10) / priceData.ma10) * 100 : 0;
      const ma50Ratio = data.ma50 ? ((price - data.ma50) / data.ma50) * 100 : 0;
      const ma200Ratio = data.ma200 ? ((price - data.ma200) / data.ma200) * 100 : 0;

      if(row.querySelector('.ma10')) row.querySelector('.ma10').innerHTML = `<span style="color:${ma10Ratio < 0 ? 'red' : 'green'}">${ma10Ratio.toFixed(2)}</span>`;
      if(row.querySelector('.ma50')) row.querySelector('.ma50').innerHTML = `<span style="color:${ma50Ratio < 0 ? 'red' : 'green'}">${ma50Ratio.toFixed(2)}</span>`;
      if(row.querySelector('.ma200')) row.querySelector('.ma200').innerHTML = `<a href="https://www.barchart.com/stocks/quotes/${ticker}/overview" target="_blank" style="color:${ma200Ratio < 0 ? 'red' : 'green'}">${ma200Ratio.toFixed(2)}</a>`;
      const finalRsi = (priceData && priceData.rsi) ? priceData.rsi : data.calculatedRsi;
      if(row.querySelector('.rsi')) row.querySelector('.rsi').textContent = finalRsi ? finalRsi.toFixed(2) : '-';
    }

    // Utility to check if today is a new business day compared to cached date
    function isNewBusinessDay(lastDateStr) {
      if (!lastDateStr) return true;
      const lastDate = new Date(lastDateStr);
      const now = new Date();

      return (
        lastDate.getFullYear() !== now.getFullYear() ||
        lastDate.getMonth() !== now.getMonth() ||
        lastDate.getDate() !== now.getDate()
      );
    }

    // IndexedDB Cache helpers
    const dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open('ErMoveCacheDB', 1);
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains('cache')) {
          db.createObjectStore('cache');
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });

    async function getCache(key) {
      try {
        const db = await dbPromise;
        return new Promise((resolve) => {
          const transaction = db.transaction('cache', 'readonly');
          const store = transaction.objectStore('cache');
          const request = store.get(key);
          request.onsuccess = () => resolve(request.result || null);
          request.onerror = () => resolve(null);
        });
      } catch { return null; }
    }

    async function setCache(key, value) {
      try {
        const db = await dbPromise;
        return new Promise((resolve) => {
          const transaction = db.transaction('cache', 'readwrite');
          const store = transaction.objectStore('cache');
          const request = store.put(value, key);
          request.onsuccess = () => resolve();
          request.onerror = () => resolve();
        });
      } catch {}
    }

    async function getFinancialsCached(ticker) {
      const cacheKey = `Straddle_fin_${ticker}`;
      const cached = await getCache(cacheKey);
      if (cached && cached.total_revenue) {
        return cached;
      }
      try {
        const res = await fetchWithRetry(`https://phx.unusualwhales.com/api/stock/${ticker}/av/financials`);
        if (res && res.data && res.data.income_statements) {
          const annual = res.data.income_statements.find(r => r.report_type === 'annual');
          const ttm = annual ? parseFloat(annual.total_revenue) : 0;
          if (ttm > 0) {
             const data = { total_revenue: ttm };
             await setCache(cacheKey, data);
             return data;
          }
        }
      } catch(e) {}
      return { total_revenue: 0 };
    }

    // Wrap fetchEarnings with caching
    async function fetchEarningsCached(ticker) {
      const spinner = document.getElementById('loadingSpinner');
      const cacheKey = `Straddle_er_${ticker}`;
      const cached = await getCache(cacheKey);

      if (cached && cached.data && cached.fetchedAt &&
        cached.data.histMove1 !== undefined &&
        !isNewBusinessDay(cached.fetchedAt)) {
        
        const fetchedTime = new Date(cached.fetchedAt);
        const now = new Date();
        const diffHours = (now - fetchedTime) / (1000 * 60 * 60);

        if (diffHours >= 1) {
            try {
                const res = await fetch(`https://phx.unusualwhales.com/api/ticker/${ticker}/price/`);
                if (res.ok) {
                    const jsonPrice = await res.json();
                    const latestPrice = parseFloat(jsonPrice.curr) || parseFloat(jsonPrice.prev) || 0;
                    if (latestPrice > 0) {
                        cached.data.price = latestPrice;
                        
                        const preErPrice = cached.data.preErPrice || 0;
                        const postErMove1dRatio = parseFloat(cached.data.post_earnings_move_1d) / 100 || 0;
                        const postErPrice = preErPrice * (1 + postErMove1dRatio);
                        cached.data.priceChange = postErPrice ? ((latestPrice - postErPrice) / postErPrice * 100).toFixed(2) : 0;
                        cached.data.mcp = preErPrice ? ((latestPrice - preErPrice) / preErPrice * 100).toFixed(2) : 0;
                        
                        const mcp2qPreErPrice = cached.data.mcp2qPreErPrice || 0; 
                        cached.data.mcp2q = mcp2qPreErPrice ? ((latestPrice - mcp2qPreErPrice) / mcp2qPreErPrice * 100).toFixed(2) : cached.data.mcp2q;
                        
                        const expectedMoveRatio = parseFloat(cached.data.expected_move_perc) / 100 || 0;
                        const lastImpliedMoveAbs = preErPrice * expectedMoveRatio;
                        
                        const ucpAbs = preErPrice + 2 * lastImpliedMoveAbs;
                        const ucpaAbs = preErPrice + lastImpliedMoveAbs;
                        const lcpaAbs = preErPrice - lastImpliedMoveAbs;
                        const lcpAbs = preErPrice - 2 * lastImpliedMoveAbs;

                        cached.data.ucp = latestPrice ? ((latestPrice - ucpAbs) / latestPrice * 100).toFixed(2) : 0;
                        cached.data.ucpa = latestPrice ? ((latestPrice - ucpaAbs) / latestPrice * 100).toFixed(2) : 0;
                        cached.data.lcpa = latestPrice ? ((latestPrice - lcpaAbs) / latestPrice * 100).toFixed(2) : 0;
                        cached.data.lcp = latestPrice ? ((latestPrice - lcpAbs) / latestPrice * 100).toFixed(2) : 0;
                        
                        cached.fetchedAt = new Date().toISOString();
                        await setCache(cacheKey, cached);
                    }
                }
            } catch (err) {
                console.error(`Price refresh failed for ${ticker}:`, err);
            }
        }
        
        return cached.data;
      }

      if (spinner) spinner.style.display = 'block';
      try {
        const data = await fetchEarnings(ticker);
        if (data) {
          await setCache(cacheKey, { data, fetchedAt: new Date().toISOString() });
        }
        return data;
      } finally {
        if (spinner) spinner.style.display = 'none';
        const spinnerDone = document.getElementById('doneSpinner');
        if (spinner) spinner.style.display = 'block';
      }
    }

    
    
    let appData = []; // Array of {ticker, data, priceData}
    let currentSortColumn = 'er_date';
    let currentSortDesc = false;

    function updateDataWithPrices(data) {
      if (!data) return;
      
      const calcP = (data) => {
         var sc = parseFloat(data.straddle && data.straddle != "N/A" && data.straddle != 0 ? (parseFloat(data.straddle) + parseFloat(data.straddle) * 0.15).toFixed(2) : 0);
         var ec = parseFloat(data.expected_move_perc && data.expected_move_perc != 0 && data.expected_move_perc != 'N/A' ? (parseFloat(data.expected_move_perc) + parseFloat(data.expected_move_perc) * 0.15).toFixed(2) : 0);
         ec = parseFloat(ec && ec != "N/A" && ec != 0 ? ec : (data.avgHistoricMove || 0));
         return parseFloat((ec && sc && ec > 0 && sc > 0 ? parseFloat(((sc - ec) / ec) * 100) : 999).toFixed(2));
      };
      data.p_ratio = calcP(data);
      const latestPrice = data.price || 0;
      if (latestPrice === 0) return;

      const preErPrice = data.preErPrice || 0;
      
      if (data.mcp2qPreErPrice) {
          data.mcp2q = ((latestPrice - data.mcp2qPreErPrice) / data.mcp2qPreErPrice * 100).toFixed(2);
      }

      const postErMove1dRatio = parseFloat(data.post_earnings_move_1d) / 100 || 0;
      const expectedMoveRatio = parseFloat(data.expected_move_perc) / 100 || 0;
      const lastImpliedMoveAbs = preErPrice * expectedMoveRatio;

      data.mcp = preErPrice ? ((latestPrice - preErPrice) / preErPrice * 100).toFixed(2) : 0;
      data.ucp = latestPrice ? ((latestPrice - (preErPrice + 2 * lastImpliedMoveAbs)) / latestPrice * 100).toFixed(2) : 0;
      data.ucpa = latestPrice ? ((latestPrice - (preErPrice + lastImpliedMoveAbs)) / latestPrice * 100).toFixed(2) : 0;
      data.lcpa = latestPrice ? ((latestPrice - (preErPrice - lastImpliedMoveAbs)) / latestPrice * 100).toFixed(2) : 0;
      data.lcp = latestPrice ? ((latestPrice - (preErPrice - 2 * lastImpliedMoveAbs)) / latestPrice * 100).toFixed(2) : 0;
      data.priceChange = data.postErPrice ? (((latestPrice - data.postErPrice) / data.postErPrice) * 100).toFixed(2) : 0;
      
      data.ma10Ratio = data.calculatedMa10 ? ((latestPrice - data.calculatedMa10) / data.calculatedMa10) * 100 : 0;
      data.ma50Ratio = data.ma50 ? ((latestPrice - data.ma50) / data.ma50) * 100 : 0;
      data.ma200Ratio = data.ma200 ? ((latestPrice - data.ma200) / data.ma200) * 100 : 0;
      
      const erM = parseFloat(data.post_earnings_move_1d) || 0;
      const ma200v = parseFloat(data.ma200Ratio) || 0;
      const mcp2qv = parseFloat(data.mcp2q) || 0;
      const mcpv = parseFloat(data.mcp) || 0;
      const lcpv = parseFloat(data.lcp) || 0;
      const lcpav = parseFloat(data.lcpa) || 0;
      const ucpv = parseFloat(data.ucp) || 0;
      const ucpav = parseFloat(data.ucpa) || 0;

      let entry = '-';
      let code = '-';

      if (erM > 0 && ma200v > 0 && mcp2qv > 0 && mcpv > 0 && lcpv > 0 && ucpv > 0) { entry = 'UCP'; code = 'BOU'; }
      else if (erM > 0 && ma200v > 0 && mcp2qv > 0 && mcpv < 0 && lcpv > 0 && ucpv < 0) { entry = 'LCP'; code = 'BOL'; }
      else if (erM > 0 && ma200v > 0 && mcp2qv > 0 && mcpv > 0 && lcpv > 0 && ucpv < 0) { entry = 'MCP'; code = 'BOM'; }
      else if (ma200v > 0 && mcp2qv < 0 && mcpv < 0 && lcpv < 0 && ucpv < 0) { entry = 'LCP'; code = 'BDL'; }
      else if (ma200v < 0 && mcp2qv < 0 && mcpv < 0 && lcpv > 0 && ucpv < 0) { entry = 'MA200'; code = 'BD2'; }
      else if (erM < 0 && ma200v > 0 && mcp2qv > 0 && mcpv < 0 && lcpv > 0 && ucpv < 0) { entry = 'LCP/MA200'; code = 'UTL2'; }
      else if (erM < 0 && ma200v > 0 && mcp2qv > 0 && mcpv > 0 && lcpv > 0 && ucpv < 0) { entry = 'MCP'; code = 'UTM'; }
      else if (erM < 0 && ma200v > 0 && mcp2qv > 0 && mcpv > 0 && lcpv > 0 && ucpv > 0) { entry = 'UCP'; code = 'UTU'; }
      else if (erM > 0 && ma200v < 0 && mcp2qv < 0 && mcpv < 0 && lcpv < 0 && ucpv < 0) { entry = 'Lcp-2S'; code = 'DCB'; }
      else if (erM > 0 && mcp2qv < 0 && mcpv > 0 && lcpv > 0 && ucpv > 0) { entry = 'UCP'; code = 'BTB'; }

      data.entry = entry;
      data.code = code;
      data.finalRsi = data.calculatedRsi;
    }

    async function renderTable() {
      const progressWrapper = document.getElementById('progressWrapper');
      const progressBarFill = document.getElementById('progressBarFill');
      const progressText = document.getElementById('progressText');
      if (progressWrapper) progressWrapper.style.display = 'block';

      appData = [];
      const lazyQueue = [];
      const CONCURRENCY_LIMIT = 10;
      let index = 0;
      let processedCount = 0;
      const totalTickers = tickers.length;

      async function lazyFetchTargets(ticker) {
        const cacheKey = `Targets_${ticker}`;
        let cached = await getCache(cacheKey);
        let t1 = '-';
        let t2 = '-';
        let t3 = '-';
        
        if (cached && cached.data && cached.fetchedAt && !isNewBusinessDay(cached.fetchedAt) && typeof cached.data.t1 === 'object') {
            t1 = cached.data.t1;
            t2 = cached.data.t2;
            t3 = cached.data.t3;
        } else {
            try {
                let res = await fetchWithRetry(`https://phx.unusualwhales.com/api/analyst_results/v2?ticker=${ticker}`);
                if (res && res.data && res.data.length > 0) {
                    const validRatings = res.data.filter(item => item.price_target !== null && !isNaN(parseFloat(item.price_target)));
                    validRatings.sort((a, b) => new Date(b.date) - new Date(a.date));
                    
                    if (validRatings.length > 0) t1 = { price: parseFloat(validRatings[0].price_target).toFixed(2), date: validRatings[0].recommendation_date, firm: validRatings[0].firm_name };
                    if (validRatings.length > 1) t2 = { price: parseFloat(validRatings[1].price_target).toFixed(2), date: validRatings[1].recommendation_date, firm: validRatings[1].firm_name };
                    if (validRatings.length > 2) t3 = { price: parseFloat(validRatings[2].price_target).toFixed(2), date: validRatings[2].recommendation_date, firm: validRatings[2].firm_name };
                    
                    await setCache(cacheKey, { data: { t1, t2, t3 }, fetchedAt: new Date().toISOString() });
                }
            } catch(e) {}
        }
        
        const appDataItem = appData.find(item => item.ticker === ticker);
        if (appDataItem && appDataItem.data) {
            appDataItem.data.t1 = t1;
            appDataItem.data.t2 = t2;
            appDataItem.data.t3 = t3;
            
            const getTCellHTML = (tData, tkr, linkTemp, currPrice) => {
                if (!tData || tData === '-') return '-';
                const p = parseFloat(tData.price);
                if (isNaN(p)) return '-';
                let colStr = '';
                if (currPrice > 0) {
                    if (p > currPrice) colStr = 'color:#22c55e;'; // Green
                    else if (p < currPrice) colStr = 'color:#ef4444;'; // Red
                }
                const title = `${tData.date || ''} - ${tData.firm || ''}`;
                if (linkTemp) return `<a href="${linkTemp.replace('{ticker}', tkr)}" target="_blank" style="${colStr}" title="${title}">${tData.price}</a>`;
                return `<span style="${colStr}" title="${title}">${tData.price}</span>`;
            };
            const row = document.getElementById(`row-${ticker}`);
            if (row) {
                const t1Cell = row.querySelector('.t1');
                if (t1Cell) t1Cell.innerHTML = getTCellHTML(t1, ticker, 'https://unusualwhales.com/stock/{ticker}/analysts/', appDataItem.data.price);
                
                const t2Cell = row.querySelector('.t2');
                if (t2Cell) t2Cell.innerHTML = getTCellHTML(t2, ticker, 'https://www.tipranks.com/stocks/{ticker}/forecast/', appDataItem.data.price);
                
                const t3Cell = row.querySelector('.t3');
                if (t3Cell) t3Cell.innerHTML = getTCellHTML(t3, ticker, null, appDataItem.data.price);
            }
        }
      }

      async function processLazyQueue() {
        while (lazyQueue.length > 0) {
          const batch = lazyQueue.splice(0, 10);
          await Promise.all(batch.map(t => lazyFetchTargets(t)));
          await new Promise(res => setTimeout(res, 200));
        }
      }

      async function processBatch(batch) {
        const promises = batch.map(async (ticker) => {
          try {
            const data = await fetchEarningsCached(ticker);
            if (data) {
              updateDataWithPrices(data);
              appData.push({ ticker, data });
              lazyQueue.push(ticker);
            }
          } catch(e) {}
          processedCount++;
          if (progressBarFill && progressText) {
            const perc = Math.round((processedCount / totalTickers) * 100);
            progressBarFill.style.width = perc + '%';
            progressText.innerText = `${processedCount} / ${totalTickers}`;
          }
        });
        await Promise.all(promises);
      }

      // Pre-sort tickers by cached marketcap
      const mcCache = {};
      for (const t of tickers) {
          const c = await getCache(`Straddle_er_${t}`);
          mcCache[t] = c && c.data && c.data.marketcap ? parseFloat(c.data.marketcap) : 0;
      }
      tickers.sort((a, b) => mcCache[b] - mcCache[a]);

      while (index < tickers.length) {
        const batch = tickers.slice(index, index + CONCURRENCY_LIMIT);
        await processBatch(batch);
        index += CONCURRENCY_LIMIT;
        
        // Render incrementally as data comes in
        sortTable(currentSortColumn);
        
        await new Promise(res => setTimeout(res, 200));
      }

      if (progressWrapper) progressWrapper.style.display = 'none';
      
      // Initial sort was 1, but we just use currentSortColumn to maintain any user changes
      sortTable(currentSortColumn); 
      
      // Start processing lazy queue in background
      processLazyQueue(); 
    }

    function renderTableBody() {
      const tableBody = document.querySelector('#earningsTable tbody');
      if(!tableBody) return;
      let html = '';
      
      // Headers visual update
      const thead = document.querySelector('#earningsTable thead tr');
      if (thead) {
        Array.from(thead.children).forEach((th, idx) => {
          let text = th.textContent.replace(/[🔼🔽]/g, '').trim();
          if (idx === currentSortColumn) {
            text += currentSortDesc ? ' 🔽' : ' 🔼';
          }
          th.textContent = text;
        });
      }

      const getTCellRender = (tData, tkr, linkTemp, currPrice) => {
        if (!tData || tData === '-' || typeof tData !== 'object') return tData || '-';
        const p = parseFloat(tData.price);
        if (isNaN(p)) return '-';
        let colStr = '';
        if (currPrice > 0) {
            if (p > currPrice) colStr = 'color:#22c55e;';
            else if (p < currPrice) colStr = 'color:#ef4444;';
        }
        const title = `${tData.date || ''} - ${tData.firm || ''}`;
        if (linkTemp) return `<a href="${linkTemp.replace('{ticker}', tkr)}" target="_blank" style="${colStr}" title="${title}">${tData.price}</a>`;
        return `<span style="${colStr}" title="${title}">${tData.price}</span>`;
      };
      
      for (const item of appData) {
        const { ticker, data } = item;
        var straddleCalulated = parseFloat(data.straddle && data.straddle != "N/A" && data.straddle != 0 ? (parseFloat(data.straddle) + parseFloat(data.straddle) * 0.15).toFixed(2) : 0);
        var expMoveCalulated = parseFloat(data.expected_move_perc && data.expected_move_perc != 0 && data.expected_move_perc != 'N/A' ? (parseFloat(data.expected_move_perc) + parseFloat(data.expected_move_perc) * 0.15).toFixed(2) : 0);
        
        expMoveCalulated = parseFloat(expMoveCalulated && expMoveCalulated != "N/A" && expMoveCalulated != 0 ? expMoveCalulated : (data.avgHistoricMove || 0));
        var p = parseFloat((expMoveCalulated && straddleCalulated && expMoveCalulated > 0 && straddleCalulated > 0 ? parseFloat(((straddleCalulated - expMoveCalulated) / expMoveCalulated) * 100) : 999).toFixed(2));
        
        let rowClass = "";
        const valErMove = parseFloat(data.post_earnings_move_1d) || 0;
        const valMcp = parseFloat(data.mcp) || 0;
        const valMcp2q = parseFloat(data.mcp2q) || 0;
        const valUcp = parseFloat(data.ucp) || 0;
        const valLcp = parseFloat(data.lcp) || 0;

        if (valErMove > 0 && valMcp2q > 0 && valUcp > 0) {
            rowClass = "highlight-sky-blue";
        } else if (valErMove > 0 && valMcp2q > 0 && valMcp > 0 && valUcp < 0) {
            rowClass = "highlight-dark-green";
        } else if (valErMove > 0 && valMcp2q > 0 && valMcp < 0) {
            rowClass = "highlight-light-green";
        } else if (valErMove < 0 && valMcp > 0 && valUcp > 0) {
            rowClass = "highlight-orange";
        } else if (valErMove < 0 && valMcp > 0 && valUcp < 0) {
            rowClass = "highlight-yellow";
        } else if (valErMove < 0 && valLcp < 0) {
            rowClass = "highlight-dark-red";
        } else if (valErMove < 0) {
            rowClass = "highlight-red";
        }

        const colorNumDark = (val) => {
            if (rowClass) return ''; 
            const num = parseFloat(val);
            if (isNaN(num)) return '';
            return num > 0 ? 'color: #22c55e;' : num < 0 ? 'color: #ef4444;' : '';
        };

        const rsi = data.finalRsi ? data.finalRsi.toFixed(2) : (data.calculatedRsi ? data.calculatedRsi.toFixed(2) : '-');
        const iv_rank = data.iv_rank ? parseFloat(data.iv_rank).toFixed(2) : '-';
        const report_time = data.report_time || '-';
        const histMove2 = data.histMove2 != null ? parseFloat(data.histMove2).toFixed(2) : '-';
        const ps_ratio = data.ps_ratio > 0 ? data.ps_ratio.toFixed(2) : '-';
        const erMove = parseFloat(data.post_earnings_move_1d && data.post_earnings_move_1d != 0 && data.post_earnings_move_1d != 'N/A' ? data.post_earnings_move_1d : 0);
        const priceChange = data.priceChange ? parseFloat(data.priceChange).toFixed(2) : '-';
        const mcp2q = data.mcp2q || '-';
        const mcp = data.mcp || '-';
        const ucp = data.ucp || '-';
        const ucpa = data.ucpa || '-';
        const lcpa = data.lcpa || '-';
        const lcp = data.lcp || '-';
        const ma10 = data.ma10Ratio ? data.ma10Ratio.toFixed(2) : '-';
        const ma50 = data.ma50Ratio ? data.ma50Ratio.toFixed(2) : '-';
        const ma200 = data.ma200Ratio ? data.ma200Ratio.toFixed(2) : '-';
        const price = data.price ? parseFloat(data.price).toFixed(2) : '-';
        const beta = data.beta ? parseFloat(data.beta).toFixed(2) : 0;
        
        // This handles columns mapped for BOTH ErMove.htm and test.js
        // ErMove.htm layout: Ticker(0), Date(1), RSI(2), Time(3), P(4), Straddle%(5), HistMove2(6), P/S(7), ErMove(8), Change(9), McP2q(10), McP(11), Ucp(12), Ucpa(13), Lcpa(14), Lcp(15), Ma10(16), Ma50(17), Ma200(18), Price(19), IV(20), Beta(21)
        // Note: The HTML output matches ErMove.htm format, test.js format is identical since it's the exact same UI structure.
        html += `<tr id="row-${ticker}" class="${rowClass}">
                    <td style="color: black !important;">${ticker}</td>
                    <td>${data.er_date || '-'}</td>
                    <td>${report_time}</td>
                    <td class="col-group-divider">${p}</td>
                    <td style="${straddleCalulated > 0 && expMoveCalulated >= straddleCalulated ? 'color:#22c55e;' : 'color:#ef4444'}"><a href="https://unusualwhales.com/stock/${ticker}/earnings" target="_blank" style="color:inherit;">${straddleCalulated}</a></td>
                    <td>${histMove2}</td>
                    <td>${ps_ratio}</td>
                    <td class="col-group-divider" style="${colorNumDark(erMove)}">${erMove}</td>
                    <td class="priceChange" style="${colorNumDark(priceChange)}"><a href="https://robinhood.com/stocks/${ticker}" target="_blank" style="color:inherit;">${priceChange}</a></td>
                    <td class="mcp2q" style="${colorNumDark(mcp2q)}">${mcp2q}</td>
                    <td class="mcp col-group-divider" style="${colorNumDark(mcp)}">${mcp}</td>
                    <td class="ucp" style="${colorNumDark(ucp)}">${ucp}</td>
                    <td class="ucpa" style="${colorNumDark(ucpa)}">${ucpa}</td>
                    <td class="lcpa" style="${colorNumDark(lcpa)}">${lcpa}</td>
                    <td class="lcp col-group-divider" style="${colorNumDark(lcp)}">${lcp}</td>
                    <!-- <td class="ma10" style="${colorNumDark(ma10)}">${ma10}</td> -->
                    <td class="ma50" style="${colorNumDark(ma50)}">${ma50}</td>
                    <td class="ma200 col-group-divider" style="${colorNumDark(ma200)}"><a href="https://www.barchart.com/stocks/quotes/${ticker}/overview" target="_blank" style="color:inherit;">${ma200}</a></td>
                    <td style="${isEntryNear ? 'font-weight: 900; color: #fff; font-size: 1.1em;' : ''}">${data.entry || '-'}</td>
                    <td>${data.code || '-'}</td>
                    <td class="price"><a href="https://finviz.com/quote.ashx?t=${ticker}" target="_blank" style="color:inherit;}">${price}</a></td>
                    <!-- <td class="rsi col-group-divider">${rsi}</td> -->
                    <td><a href="https://marketchameleon.com/Overview/${ticker}" target="_blank" style="color:inherit;}">${iv_rank}</a></td>
                    <!-- <td style="${beta > 1.29 ? 'color:#22c55e;' : 'color:inherit;'}">${beta}</td> -->
                    <td class="t1">${getTCellRender(data.t1, ticker, 'https://unusualwhales.com/stock/{ticker}/analysts/', data.price)}</td>
                    <td class="t2">${getTCellRender(data.t2, ticker, 'https://www.tipranks.com/stocks/{ticker}/forecast/', data.price)}</td>
                    <td class="t3">${getTCellRender(data.t3, ticker, null, data.price)}</td>
                  </tr>`;
      }
      tableBody.innerHTML = html;
      if (typeof enableRowHighlighting === "function") enableRowHighlighting();
    }

    function sortTable(sortKey, forceDesc = null) {
        if (forceDesc !== null) {
          currentSortDesc = forceDesc;
        } else if (currentSortColumn === sortKey) {
          currentSortDesc = !currentSortDesc;
        } else {
          currentSortColumn = sortKey;
          currentSortDesc = false;
        }
  
        const isDate = sortKey === 'er_date';
        const isStringColumn = ['ticker', 'er_date', 'report_time', 'entry', 'code'].includes(sortKey);
        const isNumeric = !isStringColumn;
  
        appData.sort((a, b) => {
          let valA, valB;
          
          if (sortKey === 'ticker') {
              valA = a.ticker; valB = b.ticker;
          } else {
              valA = a.data[sortKey];
              valB = b.data[sortKey];
          }

          if (['t1', 't2', 't3'].includes(sortKey)) {
              valA = (valA && typeof valA === 'object' && valA.price) ? valA.price : valA;
              valB = (valB && typeof valB === 'object' && valB.price) ? valB.price : valB;
          }
          if (isNumeric) {
              valA = parseFloat(valA) || -999;
              valB = parseFloat(valB) || -999;
          } else {
              valA = valA || '';
              valB = valB || '';
          }
  
          let result = 0;
          if (isDate) {
            const dateA = Date.parse(valA.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$1-$2')) || 0;
            const dateB = Date.parse(valB.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$1-$2')) || 0;
            result = dateA - dateB;
          } else if (isNumeric) {
            result = valA - valB;
          } else {
            result = String(valA).localeCompare(String(valB));
          }
  
          return currentSortDesc ? -result : result;
        });
  
        renderTableBody();
      }

    renderTable();

  </script>
</body>
</html>