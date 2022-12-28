const { runIfMain } = require('./lib');

const input = `jVTBgVbgJQVrTLRRsLvRzWcZvnDs
dhtmhfdfNlNNldfqmPCflqGbNZDHsDWcRzvczWsczZNzHz
tmwwwCCfbJSMbwMb
hsrZZhHlhrHmPPbMbDFDQdnQgLfMFDdDQQ
GpBtwtqrcCcjgnLgqfgDDgRn
cJwVwpCpGJctJtBcCrSCGrVJhlsbvSvTvbmHmmsWmHslmsHm
gCtWJvmfmGGwVVMhJw
nzRSpZbSVFFRDFSDzcplddqplqMhQMclMp
zFLszzRTDnZnbTZTRZsVNgCjrvfvgtvNmtfvLW
glRQRpQQtQtGtQws
TnmbLqvBFRFFLPBFnPbvRBhshTtHWhwzdwtHdsdzWhws
qmCLPNmCFnLBnmPPqVbFLRrJjVggDgJjlZVVDjDlDD
vRRgpWvPQFdTFDDNQs
bqtCmltmlbwqLVLZqwtmLBBTMcGBddTTBgFNGcZGMD
bbtmJmjlVlwblwwbwzbbvrrznvzShgRhRvhfWrWn
ZMhThfNcpbbMNNjsHpmpsRqsPmRs
wQjDgggQDPqqDlsD
SCwSzvLVCSVtQVgLnrccfdGdTdZfcZMtjJhG
wNnNmNHnNPPwwPGCrLSZZvdVVZvBtMMvdm
WQzlhzjzbBtMMlBrMl
szbgWhJjTTcsWTqgzsqcsGHfwNcwfwnHHrCGCPPGwr
CNsbpFCMSrmDhQHNNGmH
fQPPPcqvljQzjVDDgRBhGGqDgqqD
ZctlcVzcfltQtnrndbQMCM
NQjQjQvZvZjcvrrrNjgTQgBQwTJsJswJlbGstqqtmGhmwhqw
PWpHRzRnPHHSCnPFwlqhbtqGZClJqGqG
ZzVpMpWPHnVzzpWzDRzSZrcdDQdrQNrcQgQfjcNfjf
BSZMtdtZBzMFvhCbBJDbhDDC
qcqVVmccrmVcjrlHqTrjDJRPQhWvPWWfPvblffDf
cHTrbGwpmGwVjdFMnzpLznMztd
DGDGGbNgTgJQQLMRMMTNVzvPsPbdsfPVsdVVZfPf
lcCmmlpwwnwSjCHtFpCpHzCrZsVrBZZzdvDfVrsfZd
lSHwnjpFmppHqppttttcFmnhMLGNRLhTMDqJLQNLLQNLhJ
WqWfDWBjBjLbfcbbqGbWqQsrFFztsppMFCzgCJzJCrFpCM
VRlhdHZTZVRRmZwlmFrJwFpMMDDrrrtJwg
PPVddvvDZmRmHvndTHmLcbcjSjLQBGWGGQWSqP
HHvgvwHMPMwHwmcRfJNFchFGNNCm
BsTDsjzBCCBJGffN
jznSnSdqzqnQTbdDljQjQSMHWWvvgWvtZlrWpPfWwtPr
DJCJJCNjCDRfDfDRhDnNhfjFPgbGbddBTjFdTFTPbgGSdF
cmMcMVqBZVcwsGFgGqgWdFqb
vcZVzwmHVcrtrwMMvvmBHwNNCDpQRfhLhrNJNfJDDDRC
VWSSScsncpDRdnsWsVncVzTwMMMHtMTrLTLMMVHM
fjJvQqBCQNhfQlZZnqmFHLFMTFTzwzLzrHMB
CqfjjQZJPjjvpRppDPgbnSnP
tLnjNwjRWttdCwRLsfGzfzPbzbWbQQPT
cvvBvlBrFrlTffsbfTqZ
vmrFpsrvFMMMNwhtDwhN
wzgRNqwtgzMWtqGwCssBBSBZnSRsrQQS
bbjLTmpjpHcpVncVdmffPCDrjZDSDsZffDQC
pbVFncvvbpbbHJJHVdvqMGMJNwWlNlJMwqzlNM
TdszlzFsRQqFdRzqwwQGlFsGmmSBBdmdVVmgSZdSPZBBBmSD
HMCCMbJHJJLHSmSvZLBcSDBP
NWbhPjfrbbNfWCPjhNnGsNzsqpQszTQGRwGQzR
ppQpTNCPBTlNBVmNQTNrrrrtqsrWbGrVFWqhZb
DMvDHnjRvMDLghhhgbqZWbqFSS
vWvMRRJDLMnHLJjDwWnnndcllNTzBmClQBpBBzQQzCBzCJ
VsNZfPMnrCnlCnWtbvBbvwtTbZwT
JhJQdQhmRHDRdLmHJhljhphgGwtttmcvbwwTWtvtbGBttc
jqLpjSLDHlhnffCMzsqCPP
JzJdLRmmzJwrLLwLJwLTWwBrMrpHlFnScVVqccrBHSlc
tvQDQhjhvbqFqFSpjHSV
QbgZtsgfbNNQbgbsbQRfmWRJwJGWWTPRwqzR
MwvDgpwszSpSJPsssMccTQfTDfTQRTljfRfT
PmGbWhbVtZWPTqRrcTrrjTrt
NbZbWHBmVGmLbZVBVNLPsMBzwSSzMJMCsCzvnvSp
cTpgTnpzbZlJHTZm
jRrLVtqtvtrjqsHZhvpmBfJHmhhp
FqDsFLCwCVRDqwgNQcQMwnncnMpg
sCCtssdZdZJmMbNJDmtmJzLSrcGfHGLTHDHnGLrHTSSn
gQwRRWqwqgpggFWPjPpFnSTSnHNfLLQrccrLGHLL
qqlpqhjFwPgPwvvRgFlPdslZCzMZtVdtVdVMtJlN
BWVmPtRVRRWDNtZBVQzCfdscmfjcfdfzzSfz
MhgJLbGggHbqpGgpgJbrFJdjwsCChCzllzCdjDSszCCD
grpDLFrbgpJnqJrHGFHGqMHBBPRWQTPWZBQVTQWnPNVvBt
gJfggdmHDgfJJWzCcbqvcqcmTG
hLZlRBZNlBlrpprzrWqvtHvvGtbvHT
sNLRjHZLNVnZZVLppnhNsMFJSjFPPQMjwgMPPfDMfS
mDDzHfrPBvJRJhpBRg
SsTSTwJwcbCtwssGFVWppgZRbLpLRNhpLhbLvg
ttVCGjTGrfJJMfjD
ffhcsTjnfqHLqvZSHvHB
CsgmPVmstsQVpRbHBvFbHBDMvZLZGB
ppgpmmRVpVPwPrrrTNlcrwrlWs
NDtssPNBjQtCtCcT
ZZqncfqhZqhJZFTJTllCGVljSl
ndrWbfZwWhngwbqbZnMZcwWhDmmLDmzvHPvzNLdmzsvBBHHP
FQtptwMppSFQRRQfSfvTrTJJJTrvLjMMJbgJ
CcDqWBWzbldcchDGCWBCBhdGrvhnrsrjjsJvLvghrjjnnjsJ
GDBldPDGqPGWVBBcwHFmSmbpSpNRwHFV
CwHwCFwtCmdCDflHDpwFnnvzhhNJhJNzmhzhhNMM
sTbZssPqScTrqSWSShdMvgMRRzdRRQ
brBrsWPTrdrWsPcBcTcGqDLDDHjFfDClwLLBfFlFlw
lNptNFWpbVMjlBgQgvdNBRQLrd
TsDCDfSCQqqQQqDq
TwTmwPPPzZSCccScJwpWZHljtbWMFFQVHpnj
fhFmwbrgnCcSnwtS
vZVVZvQZVPZsMnNSccMHPN
ddzvQJvQzBzWRTJzdRVSWGqbRbgmfbFFbmbgmpmlff
wdslVdQtdlBVHDrHBcBc
TJWvpncCcJzCWcRfWvJRRpfZHBDZZHmDZPBjZHjZrSfb
TRJFvvWpTRRWCpCgGtgtGQdlcNtsGlwg
rCHvRLJtCjpbRCLpptHMVCQgGlMndVlQGNcCMc
zZfzSmsfSsMzMccQMVcN
ssSmPmSmhwVhZBZsTBRJrtRjtbDvjvrTHLtJ
wswRCNHHhsrWFsGfGWFBGb
lLtngDPLgLJPttgWzQWlbCfBlmBFCW
DcDnVpcnnJPngjjcdpRhwNZSCZNdNdvr
NWNzWpfMRHfwsRNznPdjtdjJtPVPHVdJ
CSLTZBrGbSmClvBVdGzFVVcFdjjjnV
SrZhZbTvmmbbLvwQzMhsfhqqWwQR
vvZqwFBZvzZzrqltPsQstrGGpMcbbR
bhJdjJJmTRQMTMMPPM
mCmgLbdVVVLhVnJmLgJhBWZFDlqFvwZDlZBnBvWB
sMrcmQcHHsLLrSHZhvdCddvtJJFl
jzjjWplWpPRPDzPzfRGjqvdJqqqCtqdqDvdDqtwC
pPNWVpGGVVffPlnSMnMsTmgsQVLr
zGMMRbpGmqqqNRmmzbNfbzPRPlvThCTrHPnrHSVPlTHR
LSjjwgsjtTjhPhHhvC
dJZtJwFgtBLDZZbmNMGzMMqS
ZrnstppPWccnsFWpnZnRdjRtjbCtSSRjjjLLbG
JgBQPJvPgHHJvmmzwGGLdjHGSjShGHqdHL
wTJvPzmTJvzJQBfwNmTmlPsrVfnVFpcMVZprDpFrsrVc
ssGCtltsSdJJtQjPdvHvfbfvqLHqZtBfVb
pzRwwDwDTgzbqVTVvHqVWB
grzHnRpmFpDMnmzFhplJCjlsPdGJSjsFCdFs
CTGBBGCBlSTTSsnTMrQbNrBMtpVzNddWHWzVpHVtdHmwhphm
JqPZgMRFFvFZvDZMDFcFFfDchdtdPWpzpWhtHWwwhVzWpddW
ZfLZMcgqRDjgjcLccDRDLsbbrSBBlQGQBCTrCBnT
VjVGVqSqFLFVSqCjFJSsbfPprHbCCRRPccRWPW
wwnQmtwlvNmpZRsPsWWNbZ
DBhhhznhddldnvjMqJMTqDMGPSjF
TTJbsJPPBDsBVbJJGJBGWLfmWzgmDmzmLqmmLddQ
jHwVZZjwFZlzLzWZLMdLqM
HHHhjHplrHSpcCSvjlsNPbNRbRnVTrRsNNNJ
NzMMLZtwRmbwFnVDhnqD
SlsJsSdSJdNJnFphVHFjph
vlrsTlGPTgvvSBScGcBvfzmmLLCtMWNZRBQMzftf
tRFLmZZRLrtRvtvvrvvGgvtLNfwzMzNwgdznMpwwpnMpqHdz
hcsBsWTcQJhjbHMncNwzMqnzwl
VWSWWTJhWBVDTJsTVWQWTVVbZtCPSvrrGSLCRFRGtRZLPmmq
hbdFhdShGsFSGBlQhNhQMLLLlLJCvLLDtVJDLlwtwD
WcqWsmcWrmqcmtDHJjVHrJCjjt
WPWcnggssmzqzzzgfzZnWRqqdGpSNFdMSFdBMSFZhSFBZZhh
GNFNtRQMGjDjwfgDZjmz
bqDsPWWbsqVsdvvBJvBfmgfLLzSwzLcmzmfB
WPWrrVrrVJhVWJDVsqnPdRQllRQRNhQGMlFQFMplGl
mChChmSQGSGJrjPHCpPFtwgsFZjtFVZfgVwtdV
MBMqvDWMlTbzlRWzllDzblZfsrgdZffgrtwrswZfdZTd
DlcMvBbBMnqMDqcRqDBMWvLmCGrGLSJhnLHCCHHnPmSQ
tscfGqftGfDnnppJGDGCZLbzMVMwPPhsblzbjzzMMz
TWPTWWmHTmFRSBSvgBPwwwlVzhMdwblhbVjRLL
TTQNNWWgHWQHPBWTNPWNcqJtGCnfqfpQZJCZpQZn
CqzCGDQJCzzftfRqRzzMdvFpFpccdZFvFMtMbd
rNHwmHVmswsHVsPTLnbFSTbZZpFcpvSZZgpg
vPLhLLwHLhVVNVvQhBqDCBfhDzCffG
WsBbBbsWNhsPsCNssRWLPLpmLDDQHlJlnlzFnDDnzF
gcGfqggMqfjjGwrdDZzQFmpJQzZlFDMF
qdwqvjdTrwfvvBCPtpVvtR
RQdbbRHtHRvqZtwVcmwVwV
WnLNnqFDlDWzzNLLrjClwCZCGZcglGCccZ
LnTFfWBpffrfrhBqdsSBqhBJHb
sqsgJpDMrNQgGsFMsPCfjCPChPWjqSWSjh
RBnRnZVcwZllLwbwwLbZVLclhpjRttSdtjPhjWShWdphjCPd
HwHwVVwVnBVBmmGppNFzrrsgJJ
WpmDFlQlzmmgMMLMLQVTvTTSwNbmTVwTtHHw
jrhPDnDnnZfjPTNtHSVTcjccwt
CJqPfGnhGZCBfnPJCrBCqdLqMlQqDLlLRgLQFFRW
vZVvDZsvhDZhZvzgVcgVqPqmwWMqcw
bdTbdBBFQcdCdcGmcP
bmjQpHfbpzDJRjNhJZ
twRrwjFptprQjjjtQRdWCmNJTlNSCmZQcNlmlSST
VVDzMWDnDHMzLZDNNJSqqCJZZD
HHhhsfVHGbnwgjfrgdpgWj
GmszZGMrLmnmsfGVRcVlwtwccc
SSCgbNqSTgCCJMHCJtlVcwVbVljlclVfwf
HTCgHSgHQThMqWQQSgDnvBdsFDvrzdZsLdmLZZ
PRlMlBPPctVBlstzVLhsdwCqCdCNDjSDdWmMqdNw
fZrQQHFffgGFprSJSgvZrfnqjmWdnndCNGWmWDwNNDCG
rTvvpJZZrfpFSbQQvrrsssLRVPPtlRtRPThzTR
FqgHFFMRTRjRFRpRRjFtNdCtJCMnNNdrdMLdrQ
VhWSmwGwWVbGbvlwwlLZJLZSdJZtNCtnTSCJ
BmWwWWzhvVfwWhmhwlmvwlRqHpscHRTpTDRFfTsjDPjD
MJMgGqMFLPGgWVjpcmjZTpmZjZpJ
hdSzzlCtzNdtWSdndttflBmjpBRmvvpjnjcvBjmvHj
zdhCrfztrDSzfWzdChrhlhgPPPGDgqFFLGGFVVqqPVQw
ZQZNQRZzFdCCgfLcCGDfScjDcG
vsmwVHTmTfGcSHjcDS
tMsmMVlSWWzdWNnQNJ
GPRcQnwwQWwFFnrnnldSqzMfSCdfdldrJf
LpTsjmZTsBZjpmzhLLMdSJJSMhCC
ZsZBssBsDpDmmVBjCmDZHgnVNWvPQPNPGvNQncQPcRWn
pznzpzlGFrvGHGrnnMvDmBMfgfTmsBsTTghDsg
LJtWVCWLCNPcSbdcShWBgBThgTfjzwfhhz
VZZCdLCVNNCVbCLzFnRqGqlHprQZHRqr
dFTsQPdMFsMnWFPdSnwBltftttvlflNN
VLZhZLqghCgzqgrLrcgVgbCvtDDtwpqNpDtlBRflDwNqDpNw
cLmVhVcgbZrVhrhCLhczhQdJHTmPJJTjvTJsPFWFTW
SSwNPNHldNJSngHqBssQvBfccB
mMppmDprWpFGRGWmWrDrtGzQfcvvQZBBzzczqRQgRqRT
WtFtFvhvpLphNJJVSCbSNP
chpGMMzcwSSGnQFRQQFWcFWn
sgddTfjLqsWrRtLvQnJr
CsmlZgssbRdMhzCHDGpGGG
vHBrTzpMPTHMtbBRRJGtDsNB
QJWWVwnCZmQlWQWlLWCCmmLwRgtDdDbgngqtRdRGbDNDGtGq
LwmWQLJcWmwPrpvpjjrcjT
fcsWnWzhWcWgcbfbvtbHTRvpvHttmLtR
lNSjwjrDFjlFhlZlQTpLHvSHptvTSRtLmJ
NwjwrQDwFCZBCfWzqhqqzc
fgNJNRcvvWRfWRrZFldlwlFwfFllflDH
spQshQhpqhJsLpnQVLqBqlFwddHSdBFFjSFmwlFmwl
hppLsqPVLnpnzJPtqtPPJTCgNcrcNbrrGNcgRNrzcZbG
PWFdgDGCFPGhMtQqHBrpJqqW
nlllLNmnVNNLllVbVRLRsQMqqpccQQJcJtqcJcnBrc
NmvZLsNrbZNjNZVNGvdFFfwdDhPFdDzC
LpZpwgLsLSzDdjVGpS
bWBlHqqBhNJWNbJQFzGtCtDtGGjNGDgtGC
RBRbJggbWRRmhWqTcnnfnmZMTTsTcP
JJgzvfzpdzzJjJhgdfhvqfdScNsLwwGsrRbwRLbcbVrVRp
WDFBTTDtHTntltnCnnntCDwGlGGbSwNVSssrbwGVsVLs
nCHMDtCWWTCCHmmPDnZQgvfQgZNJJdvdMZQg
lFDgvlsGvvZGDsFZWgGvWrPqnmwwtqmMVSWrSqMM
hRpJhLQHhdTTVPmVSrqwtHmV
ctJJJfjLpjglZDGCGljF
CnnVMbhVRbQQZjBP
rlfsLFLtmLSJscttFfsdjZwZNNwBPWRjRNZBZBfQ
tFrmDFlDtmcltFvqVzDqQzGvCVCG
JzzJzVrmzJpCCmTFmjZS
HtDDtggWssqWfDgwDWvsfDBBchZjSnGGpCFjSFZjpGjFShZg
sbvbvfbbDblWtrNVNRzRlJPCzM
nlFnFWsWhrctWVdJPDPTnTNJPJQJ
fHqvHSqRqSHjBmqvmqqHCtJSTZGdMQJDPQDPPMdNTMZN
jzqmbtRRztmbLHcFpgWVsFphpcLV
PHZFZFVZZfHgpwjFtmgjtq
rpTrTNzzNdrTJwgMwqCBJzJz
vsTWbvccRcdRbrRnRRbRrcvVpGlGHZPspSVhSPPQGGZVHV
HWnDDjfPFccDPhfchnMMVWGzzpvGszCCGWWV
JNBtBTQJNwJQjTpRVRMvpLsQzsRR
JltNSrBjmrHfdPHnDlHg
ldCJHlZFspjzHMnp
zvcLQBQcQvhBwmcDppqbNpjMLnLDDn
BvcmQhWWRzPJJzWWWg
ggSTPZBwTPTPSTRwZPBnwPMLdVvBqzsqLzqqtVzqtzBszN
QRmhQhffCQhJcDfmpChQWJmJNNtzvqtLdvNsGtLqNGzvWqvG
HQFCDhDFCCQJQmZTZwTSSwrZnRFS
QbFlsMbgPWPlJWzsJsJZntvnvZtctHBfZvBZlD
VTqpTqmSrhVLqrpjNppgntfBgfjddHffZBdtcB
VCwpqqqNVgNVgMJJwbsWWGMGFR
GCwRjQlsCQrPrGMQPsRvpdvgnjgmVVmSStptgJ
DzNcZNHZZhzzHhDzDTLWhDzSdJSSpnnVSTSvJJmgvSdmmn
pfLNDppNWHqDWfWbzcHPRslCGbwRCPwQrGQPCF
hVLnDgCmbhltrmDlhbhVmcgFBWdSBSZZBFPwBLBPfWdPWZ
TNTjJNpjqGMTRRsTTCZddfWwFHFWHSSJSFPS
CGQqvQRTNzTpQsDtmcrgDQllhnQl
SWrtcHWjcWrPcwWrBwSPffnJNsqfMNCNqNfJFfSq
QLQvhBpbbvdvTdvpTdGDbDQqqqslsNMJlMMCqMfQnlfC
gThhpmDLbzBmGLptrmRZcwHWHZjVrW
gQvzQRvSSbvvJvQgfRrfbSpGqBPGwqwVjPBBwwjpRmjB
TcNHHVVtNsDHcMcdMBjqpBnGnwlGTwlPBl
MHsMDHFMdDtZddZdFdFrhhgbFFVvffrzzffrrS
QSFmrDSSQrqlfmDDHPRTdrrTPRbsTPTsNN
wBcclhhgwgMhWLLtVMgVvzRTNNjvbszzTdjNdsRbjp
nJgVMtBhwLBctmQHQlnCGqmQZZ
sggtjzzggfGmPbCMvRCMvTmT
RDqqhdQdDlcDpqVlLbSbZFSTTPllbCMv
hqpQWRhhdncDQcBsrwzjnfgtgGfgHs
MTrzlgMNQNggrrrPlzQDPCsFRfscTfFVhVftRsFFsScS
nWWHZHhZWJjjwjLjwbLbwHGSFppVfFVcGcFLfFSVttpf
jWhZZBhqBbwvZvBjZNNQrQQQzPMlzzglPB
jLVhJZQjwFCLRjQhPRZFLDzrGDHpDGsGqztGHststC
SBNlNmWnfvdLmlnvfNSbzrDTTzprdqrDpGqqpHrG
bNmSBnBmcfMmcmnlfcnNSnLhZPVVJhwjZRJPwjZMPjMZ
VpzBDgGTGVNNpSGzppMdTQwcvFdFMQdcdFwc
ZDsqfRftWtllmlWbLLtjFFMwMrjCcwfvMFvwcC
PHbDLHZtZJSJPpVgnV
bRvTdswLLSTvwswSbDhsDTvFmmGRVmJGZJnRcGGfFVJcqn
MWllQMllWHrjWPNplrllQMPZJmnnVmqJcNmVFFnJNFqVGC
PgpQrQjjzQWHzpBdvtwhwdSShBZTsT
MhTwjMTsTRFStjmSMqqppBrHpDrzHtPqbD
dllNcZWgldLvcsvvvvgvWddlHffqBHBBfPzbbqBpPHrpHNbq
VddvgWWdCZhnhsCSSCGT
LPjqHnDNqqHNllqLpqPCZCGRCssGdGrGFrPrgr
WVBztWTQSQMBQrGgRwwwCGgtwg
QJMTgvbTTWSzWWvSbVJTzJllJlHHhLpNqpHqjNjNHpjq
PCHCbPPPHPlTThBhjGTTNhMNTh
FrmfLqdqgfmfttqtWqfrqdhshchDBshDllDBcGDhGDWs
mqgdpvFmmdLdqqQCPHZZblvwZQZl
bQGqmngwwgSNrBWJWdHZmjfZWB
FlpRLCptFLMlLPRLlCCcCCMpjJZJHShWdWvBHHdcZdBWZvSv
FRPCDTTtFptVTnQnrGbwbS
LsdmnDMTLbzsbNtqcb
lJjCnHSvQRRwQQjRRHQbgWbqctNJPbcWrcPPgc
RhGSQGwBvvGShnGlHClwjmfpmfdmVmfFDBLDDZpmMf
ppDnPmwvNDjTjjcssT
qqfRHzdCPHWfhHHtTjjbbLLGZr
MhzqWdJCzqJWSJnpnpvvPSPP
NGWdQgDDHGJgQLznzzsJFFzvzB
twRCpZVjVWqVSqVwwjtZfrrfntfvznBssBncfLrc
jRRwCqwCZhlhZRpSZpjSqWwqmDMQdMmHPQQMHGdlHdTldNGd`;
function prio(char) {
  const code = char.charCodeAt(0);

  return code - (char < 'a' ? 65 - 27 : 96);
}

function part1(input) {
  const results = input.split('\n').map((line) => {
    const len = line.length;
    const half = len / 2;
    const inFirstHalf = {};

    for (let i = 0; i < half; i += 1) {
      inFirstHalf[line[i]] = true;
    }
    for (let i = half; i < len; i += 1) {
      if (inFirstHalf[line[i]]) {
        return prio(line[i]);
      }
    }

    return -1;
  });

  return results.reduce((a, b) => a + b);
}

function part2(input) {
  const rucksacks = input.split('\n');
  const noOfRucksacks = rucksacks.length;

  const prios = [];

  for (let rIndex = 0; rIndex < noOfRucksacks; rIndex += 3) {
    const rucksack1 = rucksacks[rIndex];
    const rucksack2 = rucksacks[rIndex + 1];
    const rucksack3 = rucksacks[rIndex + 2];
    const inFirst = {};
    const inBoth = {};

    for (let i = 0; i < rucksack1.length; i += 1) {
      inFirst[rucksack1[i]] = true;
    }
    for (let i = 0; i < rucksack2.length; i += 1) {
      inBoth[rucksack2[i]] = inFirst[rucksack2[i]] && true;
    }

    for (let i = 0; i < rucksack3.length; i += 1) {
      if (inBoth[rucksack3[i]]) {
        prios.push(prio(rucksack3[i]));
        break;
      }
    }
  }

  return prios.reduce((a, b) => a + b);
}

part1.desc = 'part 1';
part1.tests = [
  {
    input: `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`,
    result: 157,
  },
];

part2.desc = 'part 2';
part2.tests = [70];

runIfMain(module, input, part1, part2);

module.exports = {
  part1,
  part2,
};