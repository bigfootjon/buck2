# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under both the MIT license found in the
# LICENSE-MIT file in the root directory of this source tree and the Apache
# License, Version 2.0 found in the LICENSE-APACHE file in the root directory
# of this source tree.

# pyre-strict


from buck2.tests.e2e_util.api.buck import Buck
from buck2.tests.e2e_util.buck_workspace import buck_test


@buck_test(inplace=True)
async def test_configuration_transition_attr_split_cquery(buck: Buck) -> None:
    result = await buck.cquery(
        "deps(fbcode//buck2/tests/targets/configurations/transition/attr_split:bb)"
    )
    result.check_returncode()
    # Check both transitioned deps are present.
    assert "attr_split:code (arm64#" in result.stdout
    assert "attr_split:code (arm32#" in result.stdout


@buck_test(inplace=True)
async def test_configuration_transition_attr_split_build(buck: Buck) -> None:
    result = await buck.build(
        "fbcode//buck2/tests/targets/configurations/transition/attr_split:bb"
    )
    result.check_returncode()
    # Rule implementations do the assertions.